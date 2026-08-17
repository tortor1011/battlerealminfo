const fs = require('fs');
const path = require('path');
const https = require('https');

// Helper to download a file from a URL
function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    // Fandom image URLs often have revision query parameters
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

// Helper to query MediaWiki imageinfo
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

// Download list for Wolf Clan
async function main() {
  const unitsDir = path.resolve('public/assets/units');
  const buildingsDir = path.resolve('public/assets/buildings');
  const gearsDir = path.resolve('public/assets/gears');

  fs.mkdirSync(unitsDir, { recursive: true });
  fs.mkdirSync(buildingsDir, { recursive: true });
  fs.mkdirSync(gearsDir, { recursive: true });

  // 1. Units
  const unitMappings = [
    { wikiFile: 'File:W-logo-brawler.gif', dest: path.join(unitsDir, 'wolf_brawler.png'), fallback: 'File:Brawler-battlerealms.png' },
    { wikiFile: 'File:W-logo-hurler.gif', dest: path.join(unitsDir, 'wolf_hurler.png'), fallback: 'File:Hurler-battlerealms.png' },
    { wikiFile: 'File:W-logo-mauler.gif', dest: path.join(unitsDir, 'wolf_mauler.png'), fallback: 'File:Mauler-battlerealms.png' },
    { wikiFile: 'File:W-logo-berserker.gif', dest: path.join(unitsDir, 'wolf_berserker.png'), fallback: 'File:Berserker-battlerealms.png' },
    { wikiFile: 'File:W-logo-druidess.gif', dest: path.join(unitsDir, 'wolf_druidess.png'), fallback: 'File:Druidess-battlerealms.png' },
  ];

  for (const item of unitMappings) {
    let imgUrl = await getWikiImageUrl(item.wikiFile);
    if (!imgUrl && item.fallback) {
      imgUrl = await getWikiImageUrl(item.fallback);
    }
    if (imgUrl) {
      console.log(`Downloading unit: ${item.dest} from ${imgUrl}`);
      await downloadFile(imgUrl, item.dest);
    } else {
      console.log(`Not found: ${item.wikiFile}`);
    }
  }

  // 2. Buildings
  // Search building images
  const buildingMappings = [
    { wikiFile: 'File:Wolf Combat Pit icon.png', dest: path.join(buildingsDir, 'combat_pit.png'), fallback: 'File:Wolf Combat Pit.png' },
    { wikiFile: 'File:Wolf Cairn icon.png', dest: path.join(buildingsDir, 'cairn.png'), fallback: 'File:Wolf Cairn.png' },
    { wikiFile: 'File:Wolf Ballistics Crib icon.png', dest: path.join(buildingsDir, 'ballistics_den.png'), fallback: 'File:Wolf Ballistics Crib.png' },
    { wikiFile: 'File:Wolf Wolves Den icon.png', dest: path.join(buildingsDir, 'wolf_den.png'), fallback: 'File:Wolf Den.png' },
  ];

  for (const item of buildingMappings) {
    let imgUrl = await getWikiImageUrl(item.wikiFile);
    if (!imgUrl && item.fallback) {
      imgUrl = await getWikiImageUrl(item.fallback);
    }
    if (imgUrl) {
      console.log(`Downloading building: ${item.dest} from ${imgUrl}`);
      await downloadFile(imgUrl, item.dest);
    } else {
      console.log(`Not found: ${item.wikiFile}`);
    }
  }

  // 3. Battle Gears
  const gearMappings = [
    { wikiFile: 'File:W-counterpunch.gif', dest: path.join(gearsDir, 'zen_focus.png'), fallback: 'File:Zen Focus.png' },
    { wikiFile: 'File:Lavarock icon.gif', dest: path.join(gearsDir, 'lava_rocks.png') },
    { wikiFile: 'File:W-wreckingball.gif', dest: path.join(gearsDir, 'wrecking_ball.png') },
    { wikiFile: 'File:W-lycanthropy.gif', dest: path.join(gearsDir, 'lycanthropy_blood_lust.png') },
    { wikiFile: 'File:W-blessing.gif', dest: path.join(gearsDir, 'entangle_roots.png') },
  ];

  for (const item of gearMappings) {
    let imgUrl = await getWikiImageUrl(item.wikiFile);
    if (!imgUrl && item.fallback) {
      imgUrl = await getWikiImageUrl(item.fallback);
    }
    if (imgUrl) {
      console.log(`Downloading gear: ${item.dest} from ${imgUrl}`);
      await downloadFile(imgUrl, item.dest);
    } else {
      console.log(`Not found: ${item.wikiFile}`);
    }
  }

  console.log('Finished downloading Wolf clan assets!');
}

main().catch(console.error);
