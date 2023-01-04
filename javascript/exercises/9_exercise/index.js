// let word = prompt("Insert a word to check if it's a palyndrome or not."); // The solution the course wanted me to do.
// let reverse = '';

// for (let i = word.length - 1; i >= 0; i--) {
//   reverse += word[i];
// }

// word === reverse
//   ? alert('This word is a palyndrome!')
//   : alert(`This word is not a palyndrome!\n
//     - Inserted word: ${word}\n
//     - Reversed word: ${reverse}`);

let word = prompt("Insert a word to check if it's a palyndrome or not."); // my solution
let array = word.split('').reverse();
let reverse = array.join('');

word === reverse
  ? alert('This word is a palyndrome!')
  : alert(`This word is not a palyndrome!\n
    - Inserted word: ${word}\n
    - Reversed word: ${reverse}`);
