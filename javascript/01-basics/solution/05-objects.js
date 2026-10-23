// Segment 5 · Objects, and the tasks array

const task = {
    title: "Learn HTML",
    priority: "High",
    done: false
};

console.log(task);

// ---- READING ----
console.log(task.title);
console.log(task["title"]);

const field = "priority";
console.log(task[field]);        // High

console.log(task.owner);         // undefined, and the script carries on
console.log(task.titel);         // undefined -- a typo looks identical

// ---- WRITING ----
task.done = true;
task.owner = "Priya";
console.log(task);

// ---- LOOKING THROUGH AN OBJECT ----
console.log(Object.keys(task));
console.log(Object.values(task));

for (const key of Object.keys(task)) {
    console.log(key, "=", task[key]);
}

// ---- NESTING ----
const detailed = {
    title: "Learn JavaScript",
    tags: ["language", "browser"],
    meta: { created: "2026-10-06", minutes: 120 }
};

console.log(detailed.tags[0]);
console.log(detailed.meta.minutes);

// ---- THE ARRAY WE KEEP ----
const tasks = [
    { id: 1, title: "Learn HTML",       priority: "High",   done: true },
    { id: 2, title: "Add Bootstrap",    priority: "Medium", done: true },
    { id: 3, title: "Learn JavaScript", priority: "Medium", done: false },
    { id: 4, title: "Build a React app", priority: "Low",   done: false }
];

console.log(tasks);

console.log(tasks[0].title);
console.log(tasks.length, "tasks");

for (const t of tasks) {
    console.log(`${t.title} [${t.priority}]`);
}

for (const t of tasks) {
    if (!t.done) {
        console.log(`Still to do: ${t.title}`);
    }
}

let doneCount = 0;
for (const t of tasks) {
    if (t.done) {
        doneCount = doneCount + 1;
    }
}
console.log(`${doneCount} of ${tasks.length} done`);

