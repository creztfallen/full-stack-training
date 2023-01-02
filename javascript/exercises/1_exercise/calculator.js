let numbers = prompt(
  'Hello, please insert the numbers to be claculated separated by comma:'
);
let numbersArray = numbers.split(',');
let n1 = Number(numbersArray[0]);
let n2 = Number(numbersArray[1]);

function calculator(n1, n2) {
  let soma = n1 + n2;
  let subtracao = n1 - n2;
  let multiplicacao = n1 * n2;
  let divisao = n1 / n2;

  alert(
    `Soma: ${soma}\n Subtração: ${subtracao}\n Multiplicação: ${multiplicacao}\n Divisão: ${divisao}\n`
  );
}

calculator(n1, n2);
