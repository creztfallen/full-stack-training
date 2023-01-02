let measure = prompt('Insert a value in meters.');
let conversionOptions = prompt(`Select an option of conversion.\n
- Milimeter\n
- Centimeter\n
- Decimeter\n
- Decameter\n
- Hectometer\n
- Kilometer\n`).toLowerCase();

switch (conversionOptions) {
  case 'milimeter':
    measure *= 1000;
    alert(`Meter to milimeter: ${measure}`);
    break;
  case 'centimeter':
    measure *= 100;
    alert(`Meter to centimeter: ${measure}`);
    break;
  case 'decimeter':
    measure *= 10;
    alert(`Meter to decimeter: ${measure}`);
    break;
  case 'decameter':
    measure /= 10;
    alert(`Meter to decameter: ${measure}`);
    break;
  case 'hectometer':
    measure /= 100;
    alert(`Meter to hectometer: ${measure}`);
    break;
  case 'kilometer':
    measure /= 1000;
    alert(`Meter to kilometer: ${measure}`);
    break;
  default:
    alert('Invalid option!');
}
