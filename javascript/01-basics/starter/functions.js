// console.log("functions!");


function greet() {
    console.log("Hello");
}

greet();


// function add(num1, num2) {
//     const sum = num1 + num2;
//     console.log(sum);
// }

// add(5, 10);


function add() {
    const num1 = prompt("Enter the first number:");
    const num2 = prompt("Enter the second number:");
    const sum = Number(num1) + Number(num2);
    console.log(sum);
}

add();