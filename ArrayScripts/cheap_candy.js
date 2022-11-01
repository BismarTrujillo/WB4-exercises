"use strict";

let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Milky Way", price: 2.32 },
    { product: "Gummy Bears", price: 5.21 },
    { product: "Jet", price: 2.32 },
    { product: "Cube", price: 3.21 },
    { product: "Trululu", price: 3.31 },
    { product: "Gum", price: 3.11 },

];

// Which candies costs less than $4.00?

function getFourOrLess(products) {

    let numProducts = products.length;
    let fourOrLess = [];

    for (let i = 0; i < numProducts; i++) {
        if (products[i].price <= 4.00) {
            fourOrLess.push(products[i]);


        }

    }
    return fourOrLess;
}
console.log(getFourOrLess(products));

// Which candies has "M&M" its name?
function getMM(products) {

    let numProducts = products.length;
    let getMM = [];

    for (let i = 0; i < numProducts; i++) {
        if (products[i].product.indexOf("M&M") != -1) {

            getMM.push(products[i].product);


        }

    }
    return getMM;
}
console.log(getMM(products));
// Do we carry "Swedish Fish"?

function getDoWeCarry(products, candyName) {

    let numProducts = products.length;
    let j = 0;

    for (let i = 0; i < numProducts; i++) {
        if (products[i].product.indexOf(candyName) != -1) {
            j++;
        }

    }
    switch (j) {
        case 1:
            console.log("Yes, we carry " + candyName);
            break;
        default:
            console.log("No, we dont");
    }

}
getDoWeCarry(products, "Swedish Fish")




