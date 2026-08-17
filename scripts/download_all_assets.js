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
  try {
    const res = await fetch(url).then(r => r.json());
    for (const p in res.query.pages) {
      const page = res.query.pages[p];
      if (page.imageinfo && page.imageinfo[0]) {
        return page.imageinfo[0].url;
      }
    }
  } catch (err) {
    console.error(`Error querying ${fileTitle}:`, err.message);
  }
  return null;
}

async function downloadItems(items, categoryName) {
  console.log(`\n=== Downloading ${categoryName} ===`);
  for (const item of items) {
    let imgUrl = null;
    for (const title of item.wikiTitles) {
      imgUrl = await getWikiImageUrl(title);
      if (imgUrl) {
        console.log(`[Found] ${title} -> ${path.basename(item.dest)}`);
        break;
      }
    }
    if (imgUrl) {
      await downloadFile(imgUrl, item.dest);
    } else {
      console.warn(`[Missing] ${item.dest} (tried ${item.wikiTitles.join(', ')})`);
    }
  }
}

async function main() {
  const unitsDir = path.resolve('public/assets/units');
  const buildingsDir = path.resolve('public/assets/buildings');
  const gearsDir = path.resolve('public/assets/gears');

  fs.mkdirSync(unitsDir, { recursive: true });
  fs.mkdirSync(buildingsDir, { recursive: true });
  fs.mkdirSync(gearsDir, { recursive: true });

  // 1. ALL UNITS
  const units = [
    // Dragon
    { dest: path.join(unitsDir, 'dragon_spearman.png'), wikiTitles: ['File:D-logo-spearman.gif', 'File:Spearman-battlerealms.png', 'File:Spearman.png'] },
    { dest: path.join(unitsDir, 'dragon_archer.png'), wikiTitles: ['File:D-logo-archer.gif', 'File:Archer-battlerealms.png', 'File:Archer.png'] },
    { dest: path.join(unitsDir, 'dragon_warrior.png'), wikiTitles: ['File:D-logo-dragonwarrior.gif', 'File:Dragonwarrior-battlerealms.png', 'File:Dragon Warrior.png'] },
    { dest: path.join(unitsDir, 'dragon_samurai.png'), wikiTitles: ['File:D-logo-samurai.gif', 'File:Samurai-battlerealms.png', 'File:Samurai.png'] },
    { dest: path.join(unitsDir, 'dragon_geisha.png'), wikiTitles: ['File:D-logo-geisha.gif', 'File:Geisha-battlerealms.png', 'File:Geisha.png'] },

    // Serpent
    { dest: path.join(unitsDir, 'serpent_swordsman.png'), wikiTitles: ['File:S-logo-swordsman.gif', 'File:Swordsman-battlerealms.png', 'File:Swordsman.png'] },
    { dest: path.join(unitsDir, 'serpent_crossbowman.png'), wikiTitles: ['File:S-logo-crossbowman.gif', 'File:Crossbowman-battlerealms.png', 'File:Crossbowman.png'] },
    { dest: path.join(unitsDir, 'serpent_raider.png'), wikiTitles: ['File:S-logo-raider.gif', 'File:Raider-battlerealms.png', 'File:Raider.png'] },
    { dest: path.join(unitsDir, 'serpent_ronin.png'), wikiTitles: ['File:S-logo-ronin.gif', 'File:Ronin-battlerealms.png', 'File:Ronin.png'] },

    // Lotus
    { dest: path.join(unitsDir, 'lotus_blade_acolyte.png'), wikiTitles: ['File:L-logo-bladeacolyte.gif', 'File:Bladeacolyte-battlerealms.png', 'File:Blade Acolyte.png'] },
    { dest: path.join(unitsDir, 'lotus_staff_adept.png'), wikiTitles: ['File:L-logo-staffadept.gif', 'File:Staffadept-battlerealms.png', 'File:Staff Adept.png'] },
    { dest: path.join(unitsDir, 'lotus_unclean_one.png'), wikiTitles: ['File:L-logo-uncleanone.gif', 'File:Uncleanone-battlerealms.png', 'File:Unclean One.png'] },
    { dest: path.join(unitsDir, 'lotus_warlock.png'), wikiTitles: ['File:L-logo-warlock.gif', 'File:Warlock-battlerealms.png', 'File:Warlock.png'] },

    // Wolf
    { dest: path.join(unitsDir, 'wolf_brawler.png'), wikiTitles: ['File:W-logo-brawler.gif', 'File:Brawler-battlerealms.png'] },
    { dest: path.join(unitsDir, 'wolf_hurler.png'), wikiTitles: ['File:W-logo-hurler.gif', 'File:Hurler-battlerealms.png'] },
    { dest: path.join(unitsDir, 'wolf_mauler.png'), wikiTitles: ['File:W-logo-mauler.gif', 'File:Mauler-battlerealms.png'] },
    { dest: path.join(unitsDir, 'wolf_berserker.png'), wikiTitles: ['File:W-logo-berserker.gif', 'File:Berserker-battlerealms.png'] },
    { dest: path.join(unitsDir, 'wolf_druidess.png'), wikiTitles: ['File:W-logo-druidess.gif', 'File:Druidess-battlerealms.png'] },
  ];

  // 2. ALL BUILDINGS
  const buildings = [
    // Dragon
    { dest: path.join(buildingsDir, 'dojo.png'), wikiTitles: ['File:Dragon Dojo icon.png', 'File:Dragon Dojo.png', 'File:Dojo.png'] },
    { dest: path.join(buildingsDir, 'target_range.png'), wikiTitles: ['File:Dragon Target Range icon.png', 'File:Dragon Target Range.png', 'File:Target Range.png'] },
    { dest: path.join(buildingsDir, 'fireworks_factory.png'), wikiTitles: ['File:Dragon Fireworks Factory icon.png', 'File:Dragon Fireworks Factory.png', 'File:Fireworks Factory.png'] },
    { dest: path.join(buildingsDir, 'dragon_shrine.png'), wikiTitles: ['File:Dragon Shrine icon.png', 'File:Dragon Shrine.png'] },
    { dest: path.join(buildingsDir, 'bathhouse.png'), wikiTitles: ['File:Dragon Bathhouse icon.png', 'File:Dragon Bathhouse.png', 'File:Bathhouse.png', 'File:Serpent Bathhouse icon.png'] },

    // Serpent
    { dest: path.join(buildingsDir, 'tavern.png'), wikiTitles: ['File:Serpent Tavern icon.png', 'File:Serpent Tavern.png', 'File:Tavern.png'] },
    { dest: path.join(buildingsDir, 'thieves_guild.png'), wikiTitles: ['File:Serpent Thieves Guild icon.png', 'File:Serpent Thieves Guild.png', 'File:Thieves Guild.png'] },
    { dest: path.join(buildingsDir, 'sharpshooter_guild.png'), wikiTitles: ['File:Serpent Sharpshooter Guild icon.png', 'File:Serpent Sharpshooter Guild.png', 'File:Sharpshooter Guild.png'] },
    { dest: path.join(buildingsDir, 'alchemist_hut.png'), wikiTitles: ['File:Serpent Alchemist Hut icon.png', 'File:Serpent Alchemist Hut.png', 'File:Alchemist Hut.png'] },
    { dest: path.join(buildingsDir, 'metalworks.png'), wikiTitles: ['File:Serpent Metalworks icon.png', 'File:Serpent Metalworks.png', 'File:Metalworks.png'] },
    { dest: path.join(buildingsDir, 'necromancer_throne.png'), wikiTitles: ['File:Serpent Necromancer Throne icon.png', 'File:Serpent Necromancer Throne.png', 'File:Necromancers Throne.png', 'File:Necromancer Throne.png'] },

    // Lotus
    { dest: path.join(buildingsDir, 'blade_garden.png'), wikiTitles: ['File:Lotus Blade Garden icon.png', 'File:Lotus Blade Garden.png', 'File:Blade Garden.png'] },
    { dest: path.join(buildingsDir, 'training_yard.png'), wikiTitles: ['File:Lotus Training Yard icon.png', 'File:Lotus Training Yard.png', 'File:Training Yard.png'] },
    { dest: path.join(buildingsDir, 'warlock_tower.png'), wikiTitles: ['File:Lotus Warlock Tower icon.png', 'File:Lotus Warlock Tower.png', 'File:Warlock Tower.png'] },

    // Wolf
    { dest: path.join(buildingsDir, 'combat_pit.png'), wikiTitles: ['File:Wolf Combat Pit icon.png', 'File:Wolf Combat Pit.png'] },
    { dest: path.join(buildingsDir, 'ballistics_den.png'), wikiTitles: ['File:Wolf Ballistics Ground icon.png', 'File:Wolf Ballistics Den icon.png'] },
    { dest: path.join(buildingsDir, 'wolf_den.png'), wikiTitles: ['File:Wolf-icon.png', 'File:Wolves\' Den.png'] },
    { dest: path.join(buildingsDir, 'cairn.png'), wikiTitles: ['File:Wolf Cairn icon.png', 'File:Wolf Cairn.png'] },
  ];

  // 3. ALL BATTLE GEARS
  const gears = [
    // Dragon
    { dest: path.join(gearsDir, 'stun_thrust.png'), wikiTitles: ['File:Stun Thrust icon.png', 'File:D-stunthrust.gif', 'File:Stun Thrust.gif'] },
    { dest: path.join(gearsDir, 'fire_arrow.png'), wikiTitles: ['File:Fire Arrow icon.png', 'File:Fire arrow icon.png', 'File:D-firearrow.gif', 'File:Fire Arrow.gif'] },
    { dest: path.join(gearsDir, 'zen_arrow.png'), wikiTitles: ['File:Zen Arrow icon.gif', 'File:Zen Arrow icon.png', 'File:D-zenarrow.gif'] },
    { dest: path.join(gearsDir, 'ki_shield.png'), wikiTitles: ['File:Ki Shield icon.png', 'File:D-kishield.gif', 'File:Ki Shield.gif'] },
    { dest: path.join(gearsDir, 'chi_wave.png'), wikiTitles: ['File:Chi Wave icon.png', 'File:D-chiwave.gif', 'File:Chi Wave.gif'] },
    { dest: path.join(gearsDir, 'dragon_skin.png'), wikiTitles: ['File:Dragon Skin icon.png', 'File:D-dragonskin.gif', 'File:Dragon Skin.gif'] },
    { dest: path.join(gearsDir, 'dragons_breath.png'), wikiTitles: ['File:Dragons Breath icon.png', 'File:Dragon\'s Breath icon.png', 'File:D-dragonsbreath.gif'] },

    // Serpent
    { dest: path.join(gearsDir, 'mugging.png'), wikiTitles: ['File:Mugging icon.png', 'File:S-mugging.gif', 'File:Mugging.gif'] },
    { dest: path.join(gearsDir, 'glass_sword.png'), wikiTitles: ['File:Glass Sword icon.png', 'File:S-glasssword.gif', 'File:Glass Sword.gif'] },
    { dest: path.join(gearsDir, 'phosphorus_bolts.png'), wikiTitles: ['File:Phosphorus Bolts icon.png', 'File:S-phosphorusbolts.gif', 'File:Phosphorus Bolts.gif'] },
    { dest: path.join(gearsDir, 'brush_fire.png'), wikiTitles: ['File:Brush Fire icon.png', 'File:S-brushfire.gif', 'File:Brush Fire.gif'] },
    { dest: path.join(gearsDir, 'yin_blade.png'), wikiTitles: ['File:Yinblade.gif', 'File:Yin Blade icon.png', 'File:S-yinblade.gif'] },
    { dest: path.join(gearsDir, 'blood_bond.png'), wikiTitles: ['File:Blood Bond icon.png', 'File:S-bloodbond.gif', 'File:Blood Bond.gif'] },

    // Lotus
    { dest: path.join(gearsDir, 'inner_light.png'), wikiTitles: ['File:Inner Light icon.png', 'File:L-innerlight.gif', 'File:Inner Light.gif'] },
    { dest: path.join(gearsDir, 'whirling_dervish.png'), wikiTitles: ['File:Whirling Dervish icon.png', 'File:L-whirlingdervish.gif', 'File:Whirling Dervish.gif'] },
    { dest: path.join(gearsDir, 'death_siphon.png'), wikiTitles: ['File:Death Siphon icon.png', 'File:L-deathsiphon.gif', 'File:Death Siphon.gif'] },
    { dest: path.join(gearsDir, 'soul_chill.png'), wikiTitles: ['File:Soul Chill icon.png', 'File:L-soulchill.gif', 'File:Soul Chill.gif'] },

    // Wolf
    { dest: path.join(gearsDir, 'zen_focus.png'), wikiTitles: ['File:W-counterpunch.gif', 'File:Zen Focus icon.png', 'File:Zen Focus.gif'] },
    { dest: path.join(gearsDir, 'lava_rocks.png'), wikiTitles: ['File:Lavarock icon.gif', 'File:Lava Rocks icon.png'] },
    { dest: path.join(gearsDir, 'wrecking_ball.png'), wikiTitles: ['File:W-wreckingball.gif', 'File:Wrecking Ball icon.png'] },
    { dest: path.join(gearsDir, 'lycanthropy_blood_lust.png'), wikiTitles: ['File:W-lycanthropy.gif', 'File:Lycanthropy icon.png'] },
    { dest: path.join(gearsDir, 'entangle_roots.png'), wikiTitles: ['File:W-blessing.gif', 'File:Entangle Roots icon.png'] },
  ];

  await downloadItems(units, 'Units');
  await downloadItems(buildings, 'Buildings');
  await downloadItems(gears, 'Battle Gears');

  console.log('\n✅ All assets downloaded successfully!');
}

main().catch(console.error);
