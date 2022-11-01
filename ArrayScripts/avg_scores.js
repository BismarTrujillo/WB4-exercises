"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];
let numMyScores = myScores.length;
let numYourScores = yourScores.length;

function getAverage(scores) {
    let numScores = scores.length;
    let scoresTotal = 0;
    let average = 0;

    for (let i = 0; i < numScores; i++) {
        scoresTotal += scores[i];
        average = scoresTotal / numScores;
   }
   return average;
}

console.log(getAverage(myScores));
console.log(getAverage(yourScores));



