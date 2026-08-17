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

async function getImagesPrefix(prefix) {
  const url = `https://battlerealms.fandom.com/api.php?action=query&list=allimages&aifrom=${encodeURIComponent(prefix)}&ailimit=20&format=json`;
  const res = await fetch(url).then(r => r.json());
  return res.query.allimages.map(img => img.title);
}

async function finalize() {
  const buildingsDir = path.resolve('public/assets/buildings');
  const gearsDir = path.resolve('public/assets/gears');

  // Search
  const metal = await getImagesPrefix('Metal');
  console.log('Metal:', metal);
  const necro = await getImagesPrefix('Necro');
  console.log('Necro:', necro);
  const tower = await getImagesPrefix('Tower');
  console.log('Tower:', tower);
  const stun = await getImagesPrefix('Stun');
  console.log('Stun:', stun);
  const dragonGears = await getImagesPrefix('Dragon');
  console.log('Dragon:', dragonGears);

  // Direct downloads for confirmed ones
  const downloads = [
    { dest: path.join(buildingsDir, 'sharpshooter_guild.png'), title: "File:Sharpshooter's Guild.png" },
    { dest: path.join(gearsDir, 'inner_light.png'), title: "File:Iinnerstrength.gif" },
    { dest: path.join(gearsDir, 'whirling_dervish.png'), title: "File:Dark Canopy.gif" },
  ];

  for (const dl of downloads) {
    const url = await getWikiImageUrl(dl.title);
    if (url) {
      console.log(`Downloading ${dl.title} -> ${path.basename(dl.dest)}`);
      await downloadFile(url, dl.dest);
    }
  }
}

finalize().catch(console.error);
