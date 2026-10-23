// Canteen Order · Day 1 · final version
// The step numbers match the comments in the starter app.js.


// STEP 1 · React to a click
// 1a. Select all the dish buttons. They all have the class "add".
const addButtons = document.querySelectorAll('.add');

// The other parts of the page we need in steps 2 to 4
const orderList = document.querySelector('#order');
const totalText = document.querySelector('#total');
const emptyText = document.querySelector('#empty');
const clearButton = document.querySelector('#clear');


// STEP 2 · Keep an order
// 2a. An empty array called order.
let order = [];

// 1b. For each button, listen for a 'click'.
for (const button of addButtons) {
  button.addEventListener('click', () => {
    // 1c. Log the dish name.
    console.log(button.dataset.name);

    // 2b. Push an object { name, price } into order.
    // 3b. The price comes from the page as text ("60"), so turn it into a number.
    //     Without Number(), the total would be "06040" instead of 100.
    const price = Number(button.dataset.price);
    order.push({ name: button.dataset.name, price: price });

    // 2d. Call render() after every change to order.
    render();
  });
}


// STEP 4 · Remove and clear
// 4b. The Clear order button empties the order.
clearButton.addEventListener('click', () => {
  order = [];
  render();
});


// 2c. render() draws the order on the page, from the order array.
function render() {
  // Empty the list #order first, so nothing appears twice.
  orderList.innerHTML = '';

  let total = 0;

  for (const item of order) {
    // One <li> per item, showing its name and price.
    const line = document.createElement('li');
    line.textContent = `${item.name} · ₹${item.price}`;

    // 4a. A × button that removes this one item, then calls render().
    const remove = document.createElement('button');
    remove.textContent = '×';
    remove.addEventListener('click', () => {
      const index = order.indexOf(item);   // where this item is in the array
      order.splice(index, 1);              // remove 1 item at that position
      render();
    });

    line.append(remove);
    orderList.append(line);

    // 3a. Add up all the prices.
    total = total + item.price;
  }

  // 3a. Show "Total: ₹…" in #total.
  totalText.textContent = `Total: ₹${total}`;

  // 4c. Show the message #empty only when the order is empty.
  if (order.length === 0) {
    emptyText.hidden = false;
  } else {
    emptyText.hidden = true;
  }
}

// Draw the empty order once when the page loads.
render();