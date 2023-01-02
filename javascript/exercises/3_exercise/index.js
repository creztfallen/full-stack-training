let nameV1 = prompt('Insert the name of the first vehicle:');
let speedV1 = Number(prompt('Insert the speed of the first vehicle:'));

let nameV2 = prompt('Insert the name of the second vehicle:');
let speedV2 = Number(prompt('Insert the speed of the second vehicle:'));

if (speedV1 > speedV2) {
  alert(`${nameV1} is faster than ${nameV2}`);
} else if (speedV1 < speedV2) {
  alert(`${nameV2} is faster than ${nameV1}`);
} else {
  alert(`Both has the same speed.`);
}
