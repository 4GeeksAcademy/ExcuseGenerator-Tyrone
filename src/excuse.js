// Random excuse parts
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

// Generate random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Pick a random item from an array
function getRandom(array) {
  const index = getRandomNumber(0, array.length - 1);
  return array[index];
}


function generateExcuse() {
  const excuse = `${getRandom(who)} ${getRandom(action)} ${getRandom(what)} ${getRandom(when)}.`;
  document.querySelector('#excuse').innerHTML = excuse; // ✅ correct target
}

// Run once on page load
window.onload = generateExcuse;

window.generateExcuse = generateExcuse;
