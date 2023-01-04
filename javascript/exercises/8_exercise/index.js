let n = +prompt('Choose a number to be multiplied.');
let multi = '';

for (let i = 1; i <= 20; i++) {
  multi += `${n} x ${i} = ${n * i}\n`;
}

alert(`Results:\n
${multi}`);
