// Segment 4 · Arrays and loops

const titles = ["Learn HTML", "Add Bootstrap", "Learn JavaScript"];

console.log(titles);
console.log(titles[0]);
console.log(titles.length);      // 3   a property, no parentheses, not len()
console.log(titles[titles.length - 1]);   // last item, the long way
console.log(titles.at(-1));               // last item, the short way

// ---- CHANGING AN ARRAY ----
titles.push("Build a React app");
console.log(titles.length);      // 4

titles.pop();                    // removes the last one
console.log(titles.length);      // 3

console.log(titles.includes("Learn HTML"));     // true
console.log(titles.indexOf("Add Bootstrap"));   // 1
console.log(titles.indexOf("Nope"));            // -1, not an error

console.log(titles.slice(0, 2));

console.log(titles.join(", "));

const fixed = ["a", "b"];
fixed.push("c");                 // allowed
console.log(fixed);              // ["a", "b", "c"]
// fixed = ["x"];                // this line would be the TypeError

// ---- LOOPING ----
for (const title of titles) {
    console.log(title);
}

for (const title in titles) {
    console.log(title);          // 0, 1, 2  -- and they are strings
}

for (let i = 0; i < titles.length; i++) {
    console.log(i, titles[i]);
}

// ---- BUILDING A NEW ARRAY ----
const shortTitles = [];
for (const title of titles) {
    if (title.length < 13) {
        shortTitles.push(title);
    }
}
console.log(shortTitles);

