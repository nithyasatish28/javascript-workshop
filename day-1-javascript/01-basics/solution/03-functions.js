// Segment 3 · Functions

function greet(name) {
    return `Hello, ${name}`;
}

console.log(greet("Priya"));

const message = greet("Arjun");
console.log(message);

function shout(text) {
    console.log(text.toUpperCase());
}

const result = shout("hello");
console.log(result);          // undefined

console.log(greet());         // "Hello, undefined"

console.log(greet("Priya", "extra", 42));

// ---- DEFAULT VALUES ----
function greetOrStranger(name = "stranger") {
    return `Hello, ${name}`;
}
console.log(greetOrStranger());

// ---- A REAL ONE FOR THE PROJECT ----
function describeTask(title, priority = "Medium", done = false) {
    const status = done ? "done" : "pending";
    return `${title} [${priority}] - ${status}`;
}

console.log(describeTask("Learn HTML", "High", true));
console.log(describeTask("Learn JavaScript"));

// ---- EARLY RETURN ----
function priorityLabel(priority) {
    if (priority === "High") {
        return "Do this first";
    }
    if (priority === "Low") {
        return "Do this later";
    }
    return "Do this soon";
}

console.log(priorityLabel("High"));
console.log(priorityLabel("Medium"));

// ---- A FUNCTION IS A VALUE ----
const double = function (n) {
    return n * 2;
};
console.log(double(21));

