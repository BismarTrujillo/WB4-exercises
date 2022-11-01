"use strict";

let students = [
    { name: "Zephaniah", scores: [100, 96, 99, 92] },
    { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
    { name: "Siddalee", scores: [86, 72, 92] },
    { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
    { name: "Elisha", scores: [89, 100] },
    { name: "Ezra", scores: [100, 99, 100, 87] }
];

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



let numStudents = students.length;
for (let i = 0; i < numStudents; i++) {
    console.log(students[i].name + "\t" + getAverage(students[i].scores));

}