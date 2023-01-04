let cardsList = [];
let cardName;
let menu;

do {
  let cards = '';
  for (let i = 0; i < cardsList.length; i++) {
    cards += `${i + 1} º - ${cardsList[i]}\n`;
  }

  menu = prompt(`Cards list:\n ${cards}\n
  Choose an option:\n
  1 - Add a new card\n
  2 - Draw a card\n
  3- Leave`);

  switch (menu) {
    case '1':
      cardName = prompt('What is the card you wanna add??');
      cardsList.unshift(cardName);
      break;
    case '2':
      alert(`You drew the card: ${cardsList.shift()}`);
      break;
    case '3':
      alert('Shutting down...');
      break;
    default:
      alert('Invalid option!');
      break;
  }
} while (menu != '3');
