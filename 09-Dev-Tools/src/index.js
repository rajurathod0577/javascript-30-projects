const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];
const p = document.querySelector("p");

function makeGreen() {
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// clearing
console.clear();
console.log(`01. To clear the console use 'console.clear()'`);

// Regular
console.log(`02. To log some thing in console use 'console.log'`);

// Interpolated
console.log(
  `03. To insert or interpolate text in between log use percent then cherecter 's' like 'console.log('%s', 'test')' like 👇`
);
console.log("%s", "test");

// Styled
console.log(
  `04. To style the text use %c in the beginning then use comma to separete style like 'console.log('%c test','font-size: 20px')' like 👇`
);
console.log("%c test", "font-size: 20px");

// warning!
console.warn(`05. 'console.warn()' is use to show warnings in console`);

// Error :|
console.error(`06. 'console.error()' is use to show error in console`);

// Info
console.info(`07. 'console.info()' is used to show the info in console`);

// Testing
console.log(
  `08. 'console.assert()' checks the arguments and if it returns false the it shows the error in console. like if we write 'console.assert(1 !== 1, 'Condition failed')' and if the condition is true then it shows nothing like 👇`
);
console.assert(1 !== 1, "Condition failed");

// Viewing DOM Elements
console.log(
  "09. If you want to view the DOM Element then first select DOM element using QuerySelector then use 'console.log' it like console.log(element) 👇"
);
console.log(p);

// Grouping together
console.log(
  "10. To group log together we'll use 'console.group/groupCollapsed()' to begin the grouped logs and 'console.groupEnd()' to end the grouped logs like 👇"
);

dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.log(
  `11. console.log('count') is use to maintain the count of particular word like 👇`
);
console.count("test");
console.count("test");
console.count("test");
console.count("test");

//table
console.log(
  "12. To print data in table formate in console we can use 'console.table()' like 👇"
);
console.table(dogs);

// timing
api = "https://api.github.com/users/rajurathod0577";
console.log(`13. To log time of any process we can use console.time().`);
console.time("Fetching Data");
fetch(api)
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("Fetching Data");
    console.log(data);
  });
