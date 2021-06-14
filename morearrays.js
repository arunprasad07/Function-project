// 8. More on Arrays
// ------------------
// 1. Create array starts.

// Method 1:
// -------------
// let hobbies = []; // creates an empty array
// hobbies.push('Cooking');
// let newHobbies = hobbies;
// newHobbies.push('Reading');
// console.log(hobbies);
// console.log(newHobbies);
// -------------

// method 2
// -------------
// let hobbies = new Array();
// hobbies.push('Cooking');
// console.log(hobbies);

// method 3
// -------------
// let hobbies = Array();
// hobbies.push('Cooking');
// console.log(hobbies);

// method 4
// -------------
// let hobbies = Array('Reading');
// hobbies.push('Cooking');
// console.log(hobbies);

// method 5
// -------------
// let hobbies = Array(3); // will create an array with 3 empty items.
// console.log(hobbies);

// method 6
// -------------
// let hobbies = Array.of(3, 5);
// console.log(hobbies);

// method 7
// -------------
let existingHobbies = ['Cycling'];

let hobbies = Array.from(existingHobbies);
// console.log(hobbies);

// Methods supported in an array
// -----------------------------
hobbies.push('Reading');
hobbies.push('Coding');

hobbies.push('Smoking');
hobbies.pop(); // removes the element in the last arry
hobbies.unshift('Laughing'); // will insert the element into first position of the array moving all others to one step behind.
hobbies.shift();

hobbies.push('Running');
hobbies.push('Learning');

// hobbies.splice(3); // will remove all the elements in the array after the 3rd item
// hobbies.splice(0, 1); // will remove the first element in the array
// hobbies.splice(0, 2); // will remove the first 2 elements in the array
// hobbies.splice(0, 1, 'Racing'); // will replace the first element with new element

// let newHobbies = ['Running', 'Learning']; //creates an arry in the first position
// hobbies.splice(0, 1, newHobbies);
// console.log(hobbies.length);
console.log(hobbies);
// hobbies.splice(-3, 2); // will go the 3rd element from the last and delete 2 elements after that

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
let newMonths = months.slice(-3, -2); // Mar

// months.slice(3, 4) // ["Apr"]
// months.slice(-4, -2) // (2) ["Feb", "Mar"]
// let newMonths1 = months.slice(3); // Mar

// months.concat(curr, ['Aug','Sep']); // will return a new array
// months.includes('Mar'); // true checks whether the array has this value or not

let newConcatArray = months.concat(months, ['Aug', 'Sep']);
// newConcatArray.indexOf('Feb') // 1
// newConcatArray.indexOf('Feb', 5) // Search after the 5th index.
// newConcatArray.lastIndexOf('Aug')

let persons = [
  { name: 'Arun', age: 35 },
  { name: 'David', age: 36 },
];
// alert(persons.indexOf({ name: 'Arun' })); // this will construct a new anonymous object
let indexOfArun = persons.find((x) => x.name == 'Arun');
console.log(indexOfArun);

let indexOfDavid = persons.findIndex((person, index, persons) => {
  return person.name === 'David';
});
console.log(indexOfDavid);

let prices = [1, 2, 3, 4];
let calculatedTax = [];

prices.forEach((price, index, prices) => {
  calculatedTax.push(price * (1 + 0.19));
});
console.log(calculatedTax);

console.log(newMonths);

// Swap array with splice method
// ------------------------------
// Below splice will swap the array like 'Jan', 'Apr', 'Mar', 'Feb', 'May'
// let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
// months.splice(3, 0, months.splice(1, 1, months.splice(3, 1)[0])[0]);
// Check Armstrong number
// -----------------------
let userInputNumberArray = Array.from('153');
let sum = 0;
userInputNumberArray.map((el) => {
  sum += el * el * el;
});
if (sum == 153) console.log(`${sum} is an armstrong number`);
