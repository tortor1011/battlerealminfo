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

async function run() {
  const buildingsDir = path.resolve('public/assets/buildings');
  const gearsDir = path.resolve('public/assets/gears');

  const finalMap = [
    // Buildings
    { dest: path.join(buildingsDir, 'dojo.png'), titles: ['File:Dragon Dojo 2.png', 'File:Dragon Dojo.png'] },
    { dest: path.join(buildingsDir, 'metalworks.png'), titles: ['File:Serpent Metal Shop.png', 'File:Serpent Metal Shop.jpg'] },
    { dest: path.join(buildingsDir, 'necromancer_throne.png'), titles: ["File:Serpent Necromancer's Throne.jpg", "File:Necromancer's Throne.jpg"] },
    { dest: path.join(buildingsDir, 'warlock_tower.png'), titles: ['File:Lotus Flesh Crucible.png', 'File:Lotus Forge.png'] },

    // Gears
    { dest: path.join(gearsDir, 'stun_thrust.png'), titles: ['File:Stun Strike icon.gif'] },
    { dest: path.join(gearsDir, 'chi_wave.png'), titles: ["File:Dragon's Fire (2).gif", "File:Dragon's Fire icon.png"] },
    { dest: path.join(gearsDir, 'dragon_skin.png'), titles: ["File:Dragon's Strength 3.gif", "File:Dragon's Strength icon.png"] },
    { dest: path.join(gearsDir, 'dragons_breath.png'), titles: ["File:Dragon's Heart 3.gif", "File:Dragon's Heart icon.png"] },
  ];

  for (const item of finalMap) {
    for (const title of item.titles) {
      const url = await getWikiImageUrl(title);
      if (url) {
        console.log(`Downloading ${title} -> ${path.basename(item.dest)}`);
        await downloadFile(url, item.dest);
        break;
      }
    }
  }

  console.log('Complete asset download finished!');
}

run().catch(console.error);
