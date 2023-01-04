function triangle(base = 2, height = 3) {
  return (base * height) / 2;
}

function rectangle(base = 2, height = 3) {
  return base * height;
}

function square(base = 4) {
  return base * base;
}

function trapeze(smallBase = 2, bigBase = 3, height = 4) {
  return (smallBase + bigBase) * (height / 2);
}

function circle(radius = 10) {
  return Math.PI * radius * radius;
}

function options() {
  return prompt(`Hello, welcome! Choose an option:\n
      1.Triangle area\n
      2.Rectangle area\n
      3.Square area\n
      4.Trapeze area\n
      5.Circle area\n
      6.Leave`);
}

const geoCalculator = () => {
  let menu = '';
  do {
    menu = options();

    switch (menu) {
      case '1':
        alert(`The result is ${triangle(base, height)}.`);
        break;
      case '2':
        base = +prompt(`Please, inform the base of the rectangle.`);
        height = +prompt(`Please, inform the height of the rectangle.`);
        alert(`The result is ${rectangle(base, height)}.`);
        break;
      case '3':
        base = +prompt(`Please, inform the base of the square.`);
        alert(`The result is ${square(base)}.`);
        break;
      case '4':
        let smallBase = +prompt(
          `Please, inform the small base of the trapeze.`
        );
        let bigBase = +prompt(`Please, inform the big base of the trapeze.`);
        height = +prompt(`Please, inform the height of the trapeze.`);
        alert(`The result is ${trapeze(smallBase, bigBase, height)}.`);
        break;
      case '5':
        let radius = +prompt(`Please, inform the radius of the circlle.`);

        alert(`The result is ${circle(radius)}.`);
        break;
      case '6':
        alert('Bye!');
        break;
      default:
        alert('Invalid option!');
        break;
    }
  } while (menu !== '6');
};

geoCalculator();
