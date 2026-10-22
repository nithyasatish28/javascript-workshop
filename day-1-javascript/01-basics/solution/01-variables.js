// Segment 1 · Output, variables and types

console.log("Hello from JavaScript");

console.log("2 + 3 =", 2 + 3);

// ---- VARIABLES ----

let taskCount = 4;

const courseName = "Python to React";

console.log(courseName, "has", taskCount, "tasks");

taskCount = 5;
console.log("now", taskCount);

const studentName = "Priya";

// ---- TYPES ----

console.log(typeof 42);          // number
console.log(typeof "hello");     // string
console.log(typeof true);        // boolean
console.log(typeof undefined);   // undefined

console.log(7 / 2);              // 3.5
console.log(Math.floor(7 / 2));  // 3   there is no // operator
console.log(7 % 2);              // 1   same as Python
console.log(2 ** 3);             // 8   same as Python

const isDone = false;
console.log(isDone);

let notSetYet;
console.log(notSetYet);          // undefined

const nothingHere = null;
console.log(nothingHere);        // null

console.log(typeof null);        // object -- a 30-year-old bug in the
                                 // language. Ignore it.

// ---- STRINGS ----
const title = "Learn JavaScript";

console.log(title.length);       // 16

console.log(title.toUpperCase());
console.log(title.includes("Script"));   // true   -- Python's "in"

console.log(title[0]);           // L
console.log(title[-1]);          // undefined, not "t"
console.log(title.at(-1));       // t
console.log(title.slice(0, 5));  // Learn   -- there is no [0:5]

