const components = {
  blades: [
    { name: 'ArrowWizard', quantity: 1 },
    { name: 'BeatTyranno', quantity: 1 },
    { name: 'BusterDran', quantity: 2 },
    { name: 'ClawLeon', quantity: 2 },
    { name: 'CobaltDragoon', quantity: 1 },
    { name: 'CowlSphinx', quantity: 1 },
    { name: 'CrestLeon', quantity: 1 },
    { name: 'HammerIncendio', quantity: 1 },
    { name: 'HelmKnight', quantity: 1 },
    { name: 'HoverWyvern', quantity: 1 },
    { name: 'ImpactDrake', quantity: 1 },
    { name: 'KeelShark', quantity: 1 },
    { name: 'KnifeShinobi', quantity: 1 },
    { name: 'LanceKnight', quantity: 1 },
    { name: 'RoarTyranno', quantity: 2 },
    { name: 'SaberSamurai', quantity: 1 },
    { name: 'SavageBear', quantity: 1 },
    { name: 'ScytheIncendio', quantity: 2 },
    { name: 'ShadowShinobi', quantity: 1 },
    { name: 'SterlingWolf', quantity: 1 },
    { name: 'StingUnicorn', quantity: 1 },
    { name: 'SwordDran', quantity: 1 },
    { name: 'WizardWand', quantity: 2 },
    { name: 'YellKong', quantity: 1 },
    { name: 'GolemRock', quantity: 1 },
    { name: 'ObsidianShell', quantity: 1 },
    { name: 'SoarPhoenix(Blue)', quantity: 1 },
    { name: 'SoarPhoenix(Red)', quantity: 1 },
  ],

  ratchets: [
    { name: '1-60', quantity: 2 },
    { name: '1-80', quantity: 2 },
    { name: '2-60', quantity: 1 },
    { name: '2-70', quantity: 1 },
    { name: '3-60', quantity: 2 },
    { name: '3-70', quantity: 1 },
    { name: '3-80', quantity: 2 },
    { name: '3-85', quantity: 2 },
    { name: '4-60', quantity: 2 },
    { name: '4-70', quantity: 1 },
    { name: '4-80', quantity: 2 },
    { name: '5-60', quantity: 2 },
    { name: '5-70', quantity: 2 },
    { name: '5-80', quantity: 1 },
    { name: '7-60', quantity: 1 },
    { name: '9-60', quantity: 2 },
  ],

  bits: [
    { name: 'Accelerate', quantity: 2 },
    { name: 'Ball', quantity: 2 },
    { name: 'Flat', quantity: 2 },
    { name: 'Needle', quantity: 2 },
    { name: 'Spike', quantity: 1 },
    { name: 'Quake', quantity: 2 },
    { name: 'Point', quantity: 2 },
    { name: 'Cyclone', quantity: 1 },
    { name: 'Rush', quantity: 2 },
    { name: 'Hex', quantity: 2 },
    { name: 'Level', quantity: 1 },
    { name: 'Dot', quantity: 1 },
    { name: 'DiskBall', quantity: 1 },
    { name: 'HighNeedle', quantity: 2 },
    { name: 'GearBall', quantity: 1 },
    { name: 'UnderNeedle', quantity: 1 },
    { name: 'FreeBall', quantity: 1 },
    { name: 'GearFlat', quantity: 2 },
    { name: 'GearNeedle', quantity: 1 },
    { name: 'GearPoint', quantity: 1 },
    { name: 'GearRush', quantity: 1 },
    { name: 'LowRush', quantity: 1 },
  ],
};

function randomIndex(piece) {
  const length = components[piece].length;
  const index = Math.floor(Math.random() * length);
  // pick a random piece
  const item =  components[piece][index]
  // check if it is available
  if (item.quantity) {
    item.quantity--;
    return item.name;
  }
  return randomIndex(piece);
}

// Pick a random part check if it is > 1 and subtract it from the list
// If it is 0 pick another part

// Perhaps use recursion

function createBeyblade(restrictions) {
  console.log({ restrictions });
  const randomBlade = randomIndex('blades');
  const randomRatchet = randomIndex('ratchets');
  const randomBit = randomIndex('bits');
  const theBlade = `${randomBlade} ${randomRatchet} ${randomBit}`;

  if (restrictions !== '') {
    restrictions = restrictions.split(' ');
    const partsOfBlade = theBlade.split(' ');
    const hasAnyItems = restrictions.some((item) =>
      partsOfBlade.includes(item),
    );
    if (hasAnyItems) {
      return createBeyblade(restrictions.join(' '));
    }
  }
  // components.blades.splice(randomBlade.index, 1);
  // components.ratchets.splice(randomRatchet.index, 1);
  // components.bits.splice(randomBit.index, 1);
  return theBlade;
}

// Create a random blade
// Check if any of the parts is already apart of the team
// If so create a blade until it is unique
// If not add to deck

function createDeck() {
  let cantContain = [];
  let deck = [];
  for (let i = 0; deck.length < 3; i++) {
    const createdBey = createBeyblade(cantContain.join(' '));
    cantContain.push(createdBey);
    deck.push(createdBey);
  }

  return deck;
}

function createPairing() {
  const deck1 = createDeck();
  const deck2 = createDeck();
  return `Player 1 \n${deck1} \nPlayer 2 \n${deck2}`;
}

console.log(createPairing());

// const h1 = document.querySelector('h1');
// h1.textContent = createPairing();

// Look into sets