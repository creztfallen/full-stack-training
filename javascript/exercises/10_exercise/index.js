let patientList = [];
let patientName;
let menu;

do {
  let patients = '';
  for (let i = 0; i < patientList.length; i++) {
    patients += `${i + 1} º - ${patientList[i]}\n`;
  }

  menu = prompt(`Patient List: ${patients}\n
  Choose an option:\n
  1 - Add new patient\n
  2 - Check Patient\n
  3- Leave`);

  switch (menu) {
    case '1':
      patientName = prompt('What is the name of the patient?');
      patientList.push(patientName);
      break;
    case '2':
      patientList.shift();
      break;
    case '3':
      alert('Shutting down...');
      break;
    default:
      alert('Invalid option!');
      break;
  }
} while (menu != '3');
