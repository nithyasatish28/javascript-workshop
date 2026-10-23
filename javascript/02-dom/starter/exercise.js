// JavaScript basics: answers to all six exercises
// Run it in the browser (load it from index.html) or in the terminal: node basics-solutions.js
// Each numbered section matches one exercise in exercises.md.
// Only uses what we covered: const/let, template strings, if/else, functions,
// arrays, for...of, push, objects.


// ─────────────────────────────────────────────
// 1. Variables and types
// ─────────────────────────────────────────────
console.log("── 1. Variables and types ──");

const myName = "Priya";
let age = 19;

console.log(`My name is ${myName} and I am ${age} years old.`);

age = age + 1;          // let can be given a new value; const cannot
console.log(`Next year I will be ${age}.`);

console.log(typeof myName);   // "string"
console.log(typeof age);      // "number"


// ─────────────────────────────────────────────
// 2. Strings and conditions
// ─────────────────────────────────────────────
console.log("\n── 2. Strings and conditions ──");

const taskTitle = "Learn HTML";
let priority = "High";

console.log(`Task: ${taskTitle} (priority: ${priority})`);

if (priority === "High") {
  console.log("Do this first.");
} else if (priority === "Medium") {
  console.log("Do this today.");
} else {
  console.log("Do this when you have time.");
}

// Check with ===, then with ==
console.log(priority === "High");   // true
console.log(priority == "High");    // true: nothing changes here, because both sides are text.
// == only behaves differently when the types differ ("5" == 5 is true!), so always use ===.


// ─────────────────────────────────────────────
// 3. Functions
// ─────────────────────────────────────────────
console.log("\n── 3. Functions ──");

function isHighPriority(priority) {
  return priority === "High";
}

// Stretch: a default value, used when no priority is passed in
function taskSummary(title, priority = "Low") {
  if (isHighPriority(priority)) {
    return `URGENT: ${title} (priority: ${priority})`;
  }
  return `${title} (priority: ${priority})`;
}

console.log(isHighPriority("High"));     // true
console.log(isHighPriority("Medium"));   // false
console.log(isHighPriority("Low"));      // false

console.log(taskSummary("Learn HTML", "High"));
console.log(taskSummary("Add Bootstrap", "Medium"));
console.log(taskSummary("Build a React app", "Low"));

console.log(taskSummary("Read about the DOM"));   // stretch: uses the default "Low"


// ─────────────────────────────────────────────
// 4. Arrays and loops
// ─────────────────────────────────────────────
console.log("\n── 4. Arrays and loops ──");

const numbers = [4, 15, 8, 23, 11];

for (const n of numbers) {
  console.log(n * 2);
}

const bigNumbers = [];
for (const n of numbers) {
  if (n > 10) {
    bigNumbers.push(n);
  }
}
console.log(bigNumbers);                                   // [15, 23, 11]
console.log(`${bigNumbers.length} numbers are above 10.`); // 3

// Stretch: print each with its position, starting from 1
let position = 1;
for (const n of bigNumbers) {
  console.log(`${position}. ${n}`);
  position = position + 1;
}


// ─────────────────────────────────────────────
// 5. Objects
// ─────────────────────────────────────────────
console.log("\n── 5. Objects ──");

const tasks = [
  { id: 1, title: "Learn HTML",        priority: "High",   done: true },
  { id: 2, title: "Add Bootstrap",     priority: "Medium", done: true },
  { id: 3, title: "Learn JavaScript",  priority: "Medium", done: false },
  { id: 4, title: "Build a React app", priority: "Low",    done: false }
];

// 1. Add a fifth task
tasks.push({ id: 5, title: "Fetch data from an API", priority: "High", done: false });

// 2. Titles of the Medium tasks
for (const task of tasks) {
  if (task.priority === "Medium") {
    console.log(task.title);
  }
}

// 3. One line per task
for (const task of tasks) {
  if (task.done) {
    console.log(`${task.title} - done`);
  } else {
    console.log(`${task.title} - pending`);
  }
}


// ─────────────────────────────────────────────
// 6. Solo exercise
// ─────────────────────────────────────────────
console.log("\n── 6. Solo exercise ──");

// In the exercise, this is a new file, so it starts again from the four tasks
// (without the one pushed in exercise 5). That's why the report says "2 of 4 done".
const soloTasks = [
  { id: 1, title: "Learn HTML",        priority: "High",   done: true },
  { id: 2, title: "Add Bootstrap",     priority: "Medium", done: true },
  { id: 3, title: "Learn JavaScript",  priority: "Medium", done: false },
  { id: 4, title: "Build a React app", priority: "Low",    done: false }
];

// 1. How many are not done
function countPending(list) {
  let count = 0;
  for (const task of list) {
    if (task.done === false) {
      count = count + 1;
    }
  }
  return count;
}

// 2. An array of the titles with this priority
function titlesByPriority(list, priority) {
  const titles = [];
  for (const task of list) {
    if (task.priority === priority) {
      titles.push(task.title);
    }
  }
  return titles;
}

// 3. One line per task, then "2 of 4 done"
function printReport(list) {
  let doneCount = 0;
  for (const task of list) {
    if (task.done) {
      console.log(`${task.title} - done`);
      doneCount = doneCount + 1;
    } else {
      console.log(`${task.title} - pending`);
    }
  }
  console.log(`${doneCount} of ${list.length} done`);
}

// Stretch: the first pending High task, or null if there isn't one
function highestPriorityPending(list) {
  for (const task of list) {
    if (task.priority === "High" && task.done === false) {
      return task.title;       // return stops the loop straight away
    }
  }
  return null;                 // only reached if nothing matched
}

console.log(countPending(soloTasks));                 // 2
console.log(titlesByPriority(soloTasks, "Medium"));   // ["Add Bootstrap", "Learn JavaScript"]
printReport(soloTasks);                               // four lines, then "2 of 4 done"
console.log(highestPriorityPending(soloTasks));       // null: the only High task is already done