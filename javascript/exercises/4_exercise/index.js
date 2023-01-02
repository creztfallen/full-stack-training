let attackerName = prompt('Insert the name of the attacker.');
let attackerPower = +prompt('Insert the power of the attacker.');

let defenderHP = +prompt("Insert the defender's hit points");
let defenderDefensePoints = +prompt("Insert the defender's defense points");
let defenderHasShield = prompt(
  'Does the defender have a shield? [True/False]'
).toLowerCase();

if (defenderHasShield === 'true') {
  defenderHasShield = true;
} else {
  defenderHasShield = false;
}

let damage;

if (attackerPower > defenderDefensePoints && !defenderHasShield) {
  damage = attackerPower - defenderDefensePoints;
  defenderHP -= damage;
} else if (attackerPower > defenderDefensePoints && defenderHasShield) {
  damage = (attackerPower - defenderDefensePoints) / 2;
  defenderHP -= damage;
} else {
  damage = 0;
}

alert(`Damage: ${damage}\n
Attacker Power: ${attackerPower}\n
Defender HP: ${defenderHP}\n
Defender Defense: ${defenderDefensePoints}\n
Defender Has a shield: ${defenderHasShield}`);
