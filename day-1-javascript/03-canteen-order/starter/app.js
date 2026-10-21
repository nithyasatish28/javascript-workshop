// Canteen Order · Day 1
// The HTML and CSS are finished. Your job: make the page work, one step at a time.
// Open DevTools (F12) → Console to see your console.log messages.
// Finish each step's checkpoint before starting the next one.

console.log('ready');


// STEP 1 · React to a click
// 1a. Select all the dish buttons. They all have the class "add".
//     Hint: document.querySelectorAll('.add')
// 1b. For each button, listen for a 'click'.
// 1c. When a button is clicked, log the dish name.
//     Hint: every button has data-name="..." in the HTML → button.dataset.name
// ✅ Checkpoint: clicking Add on Masala dosa logs "Masala dosa".



// STEP 2 · Keep an order
// 2a. Make an empty array called order.
// 2b. On each click, push an object { name, price } into order.
//     The price is in data-price="..." → button.dataset.price
// 2c. Write a function called render() that:
//       - empties the list #order
//       - adds one <li> per item, showing its name and price
//     Hint: document.createElement('li'), li.textContent = ..., list.append(li)
// 2d. Call render() after every change to order.
// ✅ Checkpoint: three clicks show three lines.



// STEP 3 · The total
// 3a. Inside render(), add up all the prices and show "Total: ₹…" in #total.
// 3b. Test it: add Masala dosa (₹60) and Idli (₹40). Is the total ₹100?
//     If not: predict what typeof button.dataset.price gives you, then check in the console.
// ✅ Checkpoint: ₹60 + ₹40 shows Total: ₹100.



// STEP 4 · Remove and clear
// 4a. Give each <li> a × button that removes that one item, then calls render().
//     Hint: order.splice(index, 1) removes the item at position index.
// 4b. Make the Clear order button (#clear) empty the order.
// 4c. Show the message #empty only when the order is empty.
//     Hint: element.hidden = true hides it, element.hidden = false shows it.
// ✅ Checkpoint: removing and clearing both update the total.



// TEST IT · Run each test case. Write down any that fail.
// 1. Empty order: open the page, tap nothing        → "Your order is empty", Total: ₹0
// 2. Same dish twice: Masala dosa, Masala dosa      → two lines, Total: ₹120
// 3. Remove: remove one dosa                        → one line, Total: ₹60
// 4. Clear: add three dishes, press Clear order     → empty message, Total: ₹0
// 5. Phone: DevTools → device toolbar, 360 px wide  → everything fits, no sideways scrolling
