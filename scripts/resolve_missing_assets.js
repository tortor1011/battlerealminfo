const fs = require('fs');
const path = require('path');
const https = require('https');

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve(dest);
      });
      fileStream.on('error', reject);
    }).on('error', reject);
  });
}

async function getWikiImageUrl(fileTitle) {
  const url = `https://battlerealms.fandom.com/api.php?action=query&titles=${encodeURIComponent(fileTitle)}&prop=imageinfo&iiprop=url&format=json`;
  const res = await fetch(url).then(r => r.json());
  for (const p in res.query.pages) {
    const page = res.query.pages[p];
    if (page.imageinfo && page.imageinfo[0]) {
      return page.imageinfo[0].url;
    }
  }
  return null;
}

// Search Wiki page images for specific pages
async function getPageImages(pageName) {
  const url = `https://battlerealms.fandom.com/api.php?action=query&titles=${encodeURIComponent(pageName)}&prop=images&format=json`;
  const res = await fetch(url).then(r => r.json());
  for (const p in res.query.pages) {
    const page = res.query.pages[p];
    if (page.images) {
      return page.images.map(img => img.title);
    }
  }
  return [];
}

async function resolveMissing() {
  const buildingsDir = path.resolve('public/assets/buildings');
  const gearsDir = path.resolve('public/assets/gears');

  // Let's inspect pages
  const missingPages = [
    { page: 'Dojo', dest: path.join(buildingsDir, 'dojo.png') },
    { page: 'Sharpshooter_Guild', dest: path.join(buildingsDir, 'sharpshooter_guild.png') },
    { page: 'Metalworks', dest: path.join(buildingsDir, 'metalworks.png') },
    { page: 'Necromancer_Throne', dest: path.join(buildingsDir, 'necromancer_throne.png') },
    { page: 'Warlock_Tower', dest: path.join(buildingsDir, 'warlock_tower.png') },
    
    // Gears
    { page: 'Spearman', dest: path.join(gearsDir, 'stun_thrust.png'), prefer: 'stun' },
    { page: 'Archer', dest: path.join(gearsDir, 'fire_arrow.png'), prefer: 'fire' },
    { page: 'Dragon_Warrior', dest: path.join(gearsDir, 'ki_shield.png'), prefer: 'shield' },
    { page: 'Dragon_Warrior', dest: path.join(gearsDir, 'chi_wave.png'), prefer: 'wave' },
    { page: 'Samurai', dest: path.join(gearsDir, 'dragon_skin.png'), prefer: 'skin' },
    { page: 'Samurai', dest: path.join(gearsDir, 'dragons_breath.png'), prefer: 'breath' },
    { page: 'Swordsman', dest: path.join(gearsDir, 'glass_sword.png'), prefer: 'glass' },
    { page: 'Crossbowman', dest: path.join(gearsDir, 'phosphorus_bolts.png'), prefer: 'phosphor' },
    { page: 'Raider', dest: path.join(gearsDir, 'brush_fire.png'), prefer: 'brush' },
    { page: 'Ronin', dest: path.join(gearsDir, 'blood_bond.png'), prefer: 'blood' },
    { page: 'Blade_Acolyte', dest: path.join(gearsDir, 'inner_light.png'), prefer: 'light' },
    { page: 'Staff_Adept', dest: path.join(gearsDir, 'whirling_dervish.png'), prefer: 'whirl' },
    { page: 'Unclean_One', dest: path.join(gearsDir, 'death_siphon.png'), prefer: 'siphon' },
    { page: 'Warlock', dest: path.join(gearsDir, 'soul_chill.png'), prefer: 'chill' },
  ];

  for (const item of missingPages) {
    if (fs.existsSync(item.dest)) continue;
    const images = await getPageImages(item.page);
    console.log(`Page [${item.page}] has images:`, images);
    
    // Pick the best match
    let chosen = null;
    if (item.prefer) {
      chosen = images.find(img => img.toLowerCase().includes(item.prefer));
    }
    if (!chosen) {
      chosen = images.find(img => img.toLowerCase().includes('icon') || img.toLowerCase().includes(item.page.toLowerCase()));
    }
    if (!chosen && images.length > 0) {
      chosen = images[0];
    }

    if (chosen) {
      const url = await getWikiImageUrl(chosen);
      if (url) {
        console.log(`-> Downloading ${chosen} to ${path.basename(item.dest)}`);
        await downloadFile(url, item.dest);
      }
    }
  }
}

resolveMissing().catch(console.error);
