import data from './beybladeArray.json' with { type: 'json' };
const components = data;

function randomIndex(piece) {
  const length = components[piece].length;
  const index = Math.floor(Math.random() * length);
  // pick a random piece
  const item = components[piece][index];
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

const h1 = document.querySelector('h1');
h1.textContent = createPairing();

// Look into sets
