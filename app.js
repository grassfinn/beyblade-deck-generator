const components = {
  blades: [
    'Arrow Wizard',
    'Beat Tyranno',
    'Buster Dran',
    'Claw Leon',
    'Cobalt Dragoon',
    'Cowl Sphinx',
    'Crest Leon',
    'Helm Knight',
    'Hover Wyvern',
    'Impact Drake',
    'Knife Shinobi',
    'Lance Knight',
    'Roar Tyranno',
    'Savage Bear',
    'Scythe Incendio',
    'Soar Phoenix',
    'Sterling Wolf',
    'Sting Unicorn',
    'Sword Dran',
    'Wizard Wand',
    'Soar Phoenix (Blue)',
    'Yell Kong'
  ],
  ratchets: [
    '1-60',
    '1-80',
    '2-60',
    '3-60',
    '3-80',
    '3-85',
    '4-70',
    '4-80',
    '5-60',
    '5-80',
    '7-60',
    '9-60',
  ],
  bits: [
    'Quake',
    'Accel',
    'Point',
    'Cyclone',
    'Gear Flat',
    'Gear Needle',
    'Needle',
    'Low Rush',
    'High Needle',
    'Spike',
    'Ball',
    'Free Ball',
    'Gear Point',
    'Flat',
    'Rush',
    'Hex',
    'Gear Ball'
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
