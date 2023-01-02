let moneyInBank = +prompt('Hello, how much money do you have deposited?');
let withdraw;
let deposit;
let options;

do {
  options = prompt(`You have ${moneyInBank} deposited.\n
What would you like to do:\n
- Withdraw [1]\n
- Deposit [2]\n
- Cancel [3]`);

  switch (options) {
    case '1':
      withdraw = +prompt(
        'How much money would you like to withdraw from your bank account?'
      );
      moneyInBank -= withdraw;
      break;
    case '2':
      deposit = +prompt(
        'How much money would you like to deposit to your bank account?'
      );
      moneyInBank += deposit;
      break;
    case '3':
      alert('System shutting down...');
      break;
    default:
      alert('Invalid option.');
  }
} while (options !== '3');
