# Day 1: JavaScript

By the end of today your JavaScript runs a real page: the **Canteen Order** app, where you tap dishes and see the order and the total update.

## The day

| Part | Folder | What you do |
| --- | --- | --- |
| 1. Basics | [`01-basics/`](01-basics/) | Variables, strings, conditions, functions, arrays, objects, in the console |
| 2. The DOM | [`02-dom/`](02-dom/) | Find a piece of the page, listen for a click, change the page |
| 3. Canteen Order | [`03-canteen-order/`](03-canteen-order/) | Build the app, then test it |

Read before or after: [JavaScript for Python programmers](../reading/js-for-python-programmers.md) and [The DOM](../reading/the-dom.md).

AI assistants stay closed today: you are building the judgement first.

## Part 1: Basics

Open `01-basics/starter/index.html` with Live Server and open the console. For each topic, create the next file (`02-strings-conditions.js`, and so on) and change the `src` in `index.html`. The exercises are in [`exercises.md`](01-basics/exercises.md).

Rules worth keeping from today: `===` not `==`, `const` first, `for...of` not `for...in`, and `undefined` usually means something is missing.

## Part 2: The DOM

Open `02-dom/starter/index.html`. Write the JavaScript in `dom.js`. Three moves, and every frontend app is made of them:

1. **Find:** `document.querySelector("#message")`
2. **Listen:** `button.addEventListener("click", () => { ... })`
3. **Change:** `message.textContent = "..."`

Exercise: make the Reset button set the count back to 0 and empty the order list.

## Part 3: Canteen Order

The HTML and CSS are finished. You write all the JavaScript in `03-canteen-order/starter/app.js`, one step at a time. Finish each checkpoint before the next step.

| Step | What to do | Checkpoint |
| --- | --- | --- |
| 1. React to a click | Select the `.add` buttons, listen for clicks, log `button.dataset.name` | Clicking Add on Masala dosa logs “Masala dosa” |
| 2. Keep an order | `let order = []`, push `{ name, price }` on each click, write `render()` to draw the list | Three clicks show three lines |
| 3. The total | Add up the prices inside `render()` | ₹60 + ₹40 shows Total: ₹100 |
| 4. Remove and clear | A × on each line, a working Clear button, the empty message | Removing and clearing both update the total |

Step 3 has a trap: values from the page are text. If your total looks like ₹06040, check `typeof button.dataset.price`.

### Test it

| Test | Do this | Expected |
| --- | --- | --- |
| Empty order | Open the page, tap nothing | “Your order is empty”, Total: ₹0 |
| Same dish twice | Tap Masala dosa twice | Two lines, Total: ₹120 |
| Remove | Remove one dosa | One line, Total: ₹60 |
| Clear | Add three dishes, press Clear order | Empty message, Total: ₹0 |
| Phone | DevTools → device toolbar, 360 px wide | Everything fits, no sideways scrolling |

### Stretch

- Show “Masala dosa × 2” instead of two separate lines.
- A “Place order” button that is disabled while the order is empty.
- Keep the order after a refresh with `localStorage`.

One finished version: [`03-canteen-order/solution/`](03-canteen-order/solution/).

## Exit ticket

Why does the Canteen Order total need `Number()`?
