"use strict";




let lunch = [
    { item: "Steak Fajitas", price: 9.95 },
    { item: "Chips and Guacamole", price: 5.25 },
    { item: "Sweet Tea", price: 2.79 }
];

let numLunch = lunch.length;
let subTotal = 0;

for (let i = 0; i < numLunch; i++) {
    subTotal += lunch[i].price;
}

let tax = subTotal * .08;
let tip = subTotal * .18;
let total = subTotal + tax + tip;


console.log("Subtotal $ " + subTotal.toFixed(2) + "\n" + "Tax: $" + tax.toFixed(2) + "\n" + "Tip" + tip.toFixed(2) + "\n" + "Total: $" + total.toFixed(2))



