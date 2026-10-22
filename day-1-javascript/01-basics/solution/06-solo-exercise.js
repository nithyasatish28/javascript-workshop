// Segment 6 · Solo exercise

const tasks = [
    { id: 1, title: "Learn HTML",        priority: "High",   done: true },
    { id: 2, title: "Add Bootstrap",     priority: "Medium", done: true },
    { id: 3, title: "Learn JavaScript",  priority: "Medium", done: false },
    { id: 4, title: "Build a React app", priority: "Low",    done: false }
];

// 1
function countPending(list) {
    let count = 0;
    for (const t of list) {
        if (!t.done) {
            count = count + 1;
        }
    }
    return count;
}

// 2
function titlesByPriority(list, priority) {
    const found = [];
    for (const t of list) {
        if (t.priority === priority) {
            found.push(t.title);
        }
    }
    return found;
}

// 3
function printReport(list) {
    for (const t of list) {
        const status = t.done ? "done" : "pending";
        console.log(`${t.title} [${t.priority}] - ${status}`);
    }
    const doneCount = list.length - countPending(list);
    console.log(`${doneCount} of ${list.length} done`);
}

// Stretch
function highestPriorityPending(list) {
    for (const t of list) {
        if (t.priority === "High" && !t.done) {
            return t.title;
        }
    }
    return null;
}

console.log(countPending(tasks));                    // 2
console.log(titlesByPriority(tasks, "Medium"));      // two titles
printReport(tasks);
console.log(highestPriorityPending(tasks));          // null here

