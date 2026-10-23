// From the console to the page: find, listen, change.

// 1. Find a piece of the page (# for an id, . for a class, like CSS)
const message = document.querySelector("#message");
console.log(message);

// 2. Change the page
message.textContent = "JavaScript changed this line.";

// 3. Listen for a click: hand a function to addEventListener
const changeButton = document.querySelector("#change");

changeButton.addEventListener("click", () => {
    message.textContent = "You clicked the button.";
});

// 4. Keep data in a variable, then show it on the page
let clicks = 0;
const countText = document.querySelector("#count");
const addOneButton = document.querySelector("#add-one");

addOneButton.addEventListener("click", () => {
    clicks = clicks + 1;
    countText.textContent = `Clicked ${clicks} times`;
});

// 5. Data attributes, and adding new elements to the page
const dishButtons = document.querySelectorAll(".dish");
const list = document.querySelector("#list");

for (const button of dishButtons) {
    button.addEventListener("click", () => {
        console.log(button.dataset.name, button.dataset.price);
        console.log(typeof button.dataset.price);   // string: values from the page are text

        const price = Number(button.dataset.price);  // turn the text into a number

        const line = document.createElement("li");
        line.textContent = `${button.dataset.name} · ₹${price}`;
        list.append(line);
    });
}

// Mini exercise: a Reset button that sets clicks back to 0
const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", () => {
    clicks = 0;
    countText.textContent = `Clicked ${clicks} times`;
    list.innerHTML = "";
});
