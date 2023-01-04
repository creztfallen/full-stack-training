// function divide(n) {
//   console.log(n);
//   if (n % 2 === 0) {
//     divide(n / 2);
//   } else {
//     return n;
//   }
// }

// divide(80);

// function double(n) {
//   console.log(n);

//   double(n * 2);
// }

function factorial(n) {
  console.log(`Number ${n}`);
  if (n === 0) {
    return 1;
  } else if (n === 1) {
    return 1;
  } else return n * factorial(n - 1);
}

console.log(factorial(5)); // 5!

let array = [];

array.map();
