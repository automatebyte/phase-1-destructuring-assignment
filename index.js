const farmAnimals = 'cow horse sheep pig chicken';
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// 1. Destructure farm animal sounds: cow = 'moo', sheep = 'baa', pig = 'oink', chicken = 'cluck'
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// 2. Bolt (horse) left: bessie (cow), dolly (sheep), babe (pig), little (chicken)
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// 3. Chicken gone: blackAndWhite (cow), black (sheep), pink (pig)
const [blackAndWhite, , black, pink] = farmAnimals.split(' ');

// 4. Destructure color names using full variable names
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Destructure using first letters, skipping indigo
const [r, o, y, g, b, , v] = colors;

// 6. Only assign indigo using `indg`
const [, , , , , indg] = colors;

// 7. Destructure all properties from `muppet` using keys
const { muppetName, color, song, job, partner } = muppet;

// 8. Destructure nested song2, song4, nestedJob, nestedPartner from `nestedMuppet`
const {
  album: {
    theMuppetMovie: {
      song2,
      song4
    }
  },
  nestedJob,
  nestedPartner
} = nestedMuppet;
