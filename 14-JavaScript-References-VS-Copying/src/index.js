// start with strings, numbers and booleans
console.error(
  "For better understanding checkout the source code: https://github.com/rajurathod0577/javascript-30-projects/blob/main/14-JavaScript-References-VS-Copying/src/index.js"
);

console.warn(
  "If you change the value of strings, numbers and booleans its okay it is not going to change/update the value of variable which it is referring to."
);

let age = 100;
let age2 = 100;

console.log(age, age2);

age = 200;

console.log(age, age2);

let name = "Test";

let name2 = "Test 2";

console.log(name, name2);

name = "TestTest";

console.log(name, name2);

console.log("---");

console.warn(
  "Since the 'team' is not an original array it is referring to the 'player' array so if we update 'team' array it will directly affect yhe 'player' array"
);

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.

const team = players;

console.log(team, players);

team[3] = "Lux";

console.log(players);

// You might think we can just do something like this:

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();
console.log(
  "We can use slice to create new array like : 'const team2 = players.slice();'"
);

// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);
console.log(
  "Or create a new array and concat the old one in like : 'const team3 = [].concat(players);'"
);

// or use the new ES6 Spread

const team4 = [...players];
console.log("Or use the new ES6 Spread like : 'const team4 = [...players];'");

const team5 = Array.from(players);
console.log(
  "We can also use Array.from method like : 'const team5 = Array.from(players);'"
);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object
console.log("---");

// with Objects
const person = {
  name: "Test",
  age: 80,
};

// and think we make a copy:
// const captain = person;

// how do we take a copy instead?
console.log(
  "We can use Object.assign method to copy object like : 'const captain2 = Object.assign({}, person);'"
);
const captain2 = Object.assign({}, person);
captain2.age = 50;
console.log(person, captain2);

// We will hopefully soon see the object ...spread
console.log(
  "Or we can use ES6 Spread operator like : 'const captain3 = { ...person };'"
);
const captain3 = { ...person };
console.log(captain3);

console.log("---");

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

console.log(
  "Things to note - this is only one level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it."
);

console.log(
  "If you do not want to use cloneDeep. You can use a little cheat or hack to deep clone an Array or Object like : const newArray = JSON.parse(JSON.stringify(array))"
);
