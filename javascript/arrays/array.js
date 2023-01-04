const arr = ['Frodo', 'Sam', 'Pippin', 'Gandalf', 'Boromir', 'Aragorn'];
console.log(arr);

//push
let size = arr.push('Merry');
console.log(arr);
console.log(size);

//unshift
arr.unshift('Merry');
console.log(arr);

//pop
let lastElement = arr.pop();
console.log(arr);
console.log(lastElement);

//shift
lastElement = arr.shift();
console.log(arr);
console.log(lastElement);

//includes
const include = arr.includes('Gandalf');
console.log(include);

//indexOf
const index = arr.indexOf('Gandalf');
console.log(index);

//slice
const hobbits = arr.slice(0, 4);
const other = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(other);

//concat
const fellowship = hobbits.concat(other, 'Gimli');
console.log(fellowship);

//splice
const removedElements = fellowship.splice(index, 1, 'Saruman the white!');
console.log(removedElements);
console.log(fellowship);
