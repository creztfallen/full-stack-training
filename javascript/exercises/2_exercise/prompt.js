let firstName = prompt('Type in your first name:');
let surname = prompt('Type in your surname:');
let studyField = prompt('Type in your study field:');
let birthYear = Number(prompt('Type in your birth year:'));
let age = new Date().getFullYear() - birthYear;

alert(
  `Congratulations, you were registered successfully! \n
  Name: ${firstName + surname}\n 
  Study Field: ${studyField}\n 
  Age: ${age}`
);
