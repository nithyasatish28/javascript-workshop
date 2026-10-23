# JavaScript basics: exercises

Do each one in a new file, loaded by `starter/index.html`. Output goes to the console.

## 1. Variables and types

1. Make a `const` with your name and a `let` with your age.
2. Print a line using both.
3. Add a year to the age and print it again.
4. Print the type of each with `typeof`.

## 2. Strings and conditions

1. Make a `const` for a task title and a `let` for its priority (`"High"`, `"Medium"` or `"Low"`).
2. Print one backtick line: `Task: Learn HTML (priority: High)`
3. Write an `if` / `else if` / `else` that prints a different message for each priority.
4. Check the priority with `===`, then see what changes with `==`.

## 3. Functions

1. Write `isHighPriority(priority)` that returns `true` or `false`.
2. Write `taskSummary(title, priority)` that returns a sentence, and uses `isHighPriority` to add “URGENT” when it applies.
3. Call both three times and print the results.

Stretch: give `taskSummary` a default priority and call it with one argument.

## 4. Arrays and loops

1. Make an array of five numbers.
2. Loop over it and print each one doubled.
3. Build a new array holding only the numbers above 10, and print it.
4. Print how many items ended up in the new array.

Stretch: print them with their position, as `1. value`.

## 5. Objects

Start from this array:

```js
const tasks = [
    { id: 1, title: "Learn HTML",        priority: "High",   done: true },
    { id: 2, title: "Add Bootstrap",     priority: "Medium", done: true },
    { id: 3, title: "Learn JavaScript",  priority: "Medium", done: false },
    { id: 4, title: "Build a React app", priority: "Low",    done: false }
];
```

1. Add a fifth task with `push`.
2. Print the title of every task whose priority is `"Medium"`.
3. Print one line per task: `Learn HTML - done` or `- pending`.

## 6. Solo exercise

Keep the `tasks` array. Write and call a function for each:

1. `countPending(list)` returns how many are not done.
2. `titlesByPriority(list, priority)` returns an array of matching titles.
3. `printReport(list)` prints one line per task, then a last line: `2 of 4 done`.

Stretch: `highestPriorityPending(list)` returns the title of the first pending High task, or `null` if there is none.

No new syntax is needed: everything is from this session. One finished version of each file is in [`solution/`](solution/).
