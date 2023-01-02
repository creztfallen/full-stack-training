let traveler = prompt("What's your name, traveler?");
let hasVisitedCity = confirm('Have you visited any city before?');
let cityList = [];

while (hasVisitedCity === true) {
  cityList.push(prompt("What is the name of the city you've visited?"));
  hasVisitedCity = confirm('Have you visited any other city before?');
}

alert(`Traveler: ${traveler}\n
Number of cities visited: ${cityList.length}\n
Cities visited: ${cityList} `);
