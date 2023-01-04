let properties = [];
let menu = '';
let numberOfProperties = 0;

do {
  menu = prompt(
    `Number of registered properties: ${numberOfProperties}
    \nWhat do you want to do?
    \n1 - Add a new property.
    \n2 - Show all properties.
    \n3 - Leave.`
  );

  switch (menu) {
    case '1':
      const property = {};

      property.owner = prompt(`What is the name of the owner?`);
      property.numberOfRooms = prompt(
        'How many bedrooms are there in the property?'
      );
      property.numberOfBathrooms = prompt(
        'How many bathrooms are there in the property?'
      );
      property.hasGarage = prompt('Does the property have garage? [Yes/No]');

      const confirmButton = confirm(
        `Save this property?\n
      \nOwner: ${property.owner}
      \nRooms: ${property.numberOfRooms}
      \nBathrooms ${property.numberOfBathrooms}
      \nDoes it have a garage: ${property.hasGarage}`
      );

      if (confirmButton) {
        properties.push(property);
      }
      numberOfProperties++;
      break;
    case '2':
      for (let i = 0; i < properties.length; i++) {
        alert(`Property ${i + 1}\n
        Owner: ${properties[i].owner}\n
        Rooms: ${properties[i].numberOfRooms}\n
        Bathrooms: ${properties[i].numberOfBathrooms}\n
        Has garage: ${properties[i].hasGarage}\n`);
      }
      break;
    case '3':
      alert('Bye!');
      break;
    default:
      alert('Invalid option!');
      break;
  }
} while (menu !== '3');
