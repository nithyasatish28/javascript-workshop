// Segment 2 · Template strings and conditions

const studentName = "Priya";
const taskCount = 4;

// ---- BUILDING STRINGS ----
console.log(`${studentName} has ${taskCount} tasks`);

console.log(`Half done means ${taskCount / 2} tasks`);

console.log("${studentName} has tasks");

const summary = `Student: ${studentName}
Tasks: ${taskCount}`;
console.log(summary);

console.log("Hello, " + studentName);

console.log("5" + 2);        // "52"   the 2 is turned into text
console.log("5" - 2);        // 3      the "5" is turned into a number

// ---- CONDITIONS ----
const score = 72;

if (score >= 80) {
    console.log("Distinction");
} else if (score >= 50) {
    console.log("Pass");
} else {
    console.log("Needs work");
}

if (score >= 50 && !false) {
    console.log("Passed and not cancelled");
}

// ---- == VERSUS === ----
console.log(5 === 5);        // true
console.log("5" === 5);      // false  -- different types, so not equal
console.log("5" == 5);       // true   -- == converts first, then compares

console.log("5" !== 5);      // true

console.log(0 == "");        // true
console.log(0 === "");       // false

// ---- TRUTHINESS ----
if ("") {
    console.log("not printed");
} else {
    console.log("empty string is falsy");
}

if (0) {
    console.log("not printed");
} else {
    console.log("zero is falsy");
}

if ([]) {
    console.log("an empty array is TRUTHY in JavaScript");
}
const tasks = [];
if (tasks.length === 0) {
    console.log("no tasks yet");
}

// ---- ONE LINE IF ----
const done = true;
console.log(done ? "Done" : "Pending");

