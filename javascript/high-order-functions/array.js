const characters = [
  { level: 20, charName: 'Traubon', race: 'Dwarf', class: 'Paladin' },
  { level: 18, charName: 'Adrie', race: 'Elf', class: 'Rogue' },
  { level: 18, charName: 'Aëllem', race: 'Half-Elf', class: 'Bard' },
  { level: 19, charName: 'Taurôn', race: 'Elf', class: 'Druid' },
  { level: 20, charName: 'Aenor', race: 'Elf', class: 'Ranger' },
  { level: 15, charName: 'Mr Gimble', race: 'Gnome', class: 'Wizard' },
];

// map
const charNames = characters.map((characters) => {
  return characters.charName;
});

// console.log(charNames);

// Filter
const charRaces = characters.filter((characters) => {
  return characters.race !== 'Elf';
});

// console.log(charRaces);

// Reduce
const totalLevel = characters.reduce((accumulatedValue, character) => {
  return accumulatedValue + character.level;
}, 0);

// console.log(totalLevel);

const charRaces2 = characters.reduce((accumulatedValue, character) => {
  if (accumulatedValue[character.race]) {
    accumulatedValue[character.race].push(character);
  } else {
    accumulatedValue[character.race] = [character];
  }

  return accumulatedValue;
}, {});

// console.log(charRaces2);

// sort

let charactersCopy = characters.slice().sort((a, b) => {
  // using slice creates a sorted copy of the array and doesn't change the original;
  return b.level - a.level;
});

console.log(characters);
console.log(charactersCopy);
