const components = {
  blades: [
    'Arrow Wizard',
    'Beat Tyranno',
    'Buster Dran',
    'Buster Dran',
    'Claw Leon',
    'Cobalt Dragoon',
    'Cowl Sphinx',
    'Crest Leon',
    'Hammer Incendio',
    'Helm Knight',
    'Hover Wyvern',
    'Impact Drake',
    'Keel Shark',
    'Knife Shinobi',
    'Lance Knight',
    'Roar Tyranno',
    'Saber Samurai',
    'Savage Bear',
    'Scythe Incendio',
    'Shadow Shinobi',
    'Sterling Wolf',
    'Sting Unicorn',
    'Sword Dran',
    'Wizard Wand',
    'Yell Kong',
    'Golem Rock',
    'Obsidian Shell',
    'Soar Phoenix (Blue)',
    'Soar Phoenix (Red)',
  ],
  ratchets: [
    '1-60',
    '1-80',
    '2-60',
    '2-70',
    '3-60',
    '3-70',
    '3-80',
    '3-85',
    '4-60',
    '4-70',
    '4-80',
    '5-60',
    '5-70',
    '5-80',
    '7-60',
    '9-60',
    '9-70',
  ],
  bits: [
    'Accelerate',
    'Ball',
    'Flat',
    'Needle',
    'Spike',
    'Quake',
    'Point',
    'Cyclone',
    'Rush',
    'Hex',
    'Level',
    'Dot',
    'Disk Ball',
    'High Needle',
    'Gear Ball',
    'Under Needle',
    'Free Ball',
    'Gear Flat',
    'Gear Needle',
    'Gear Point',
    'Gear Rush',
    'Low Rush',
  ],
};

// pick a random bit for each blade,ratchet, and bit
// remove chosen item from the array

function randomIndex(array) {
  const length = array.length;
  const index = Math.floor(Math.random() * length);
  return { piece: array[index], index };
}

function createBeyblade({ blades, ratchets, bits }) {
  const randomBlade = randomIndex(blades);
  const randomRatchet = randomIndex(ratchets);
  const randomBit = randomIndex(bits);
  components.blades.splice(randomBlade.index, 1);
  components.ratchets.splice(randomRatchet.index, 1);
  components.bits.splice(randomBit.index, 1);
  const theBlade = `${randomBlade.piece} ${randomRatchet.piece} ${randomBit.piece}`;
  return theBlade;
}

function createDeck() {
  let deck = '';
  for (let i = 0; i < 3; i++) {
    deck += `${createBeyblade(components)}\n`;
  }
  return deck;
}

function createPairing() {
  const deck1 = createDeck();
  const deck2 = createDeck();
  return `Player 1 \n${deck1} \nPlayer 2 \n${deck2}`;
}

const h1 = document.querySelector('h1');
h1.textContent = createPairing();
