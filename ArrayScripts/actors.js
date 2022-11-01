"use strict";

let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];
// Who is the Academy Member whose ID is 187?
function searchById(academyMembers, memID) {
    let numAcademyMembers = academyMembers.length;

    for (let i = 0; i < numAcademyMembers; i++) {
        if (academyMembers[i].memID == memID) {
            return academyMembers[i].name;
        }

    }

}
console.log(searchById(academyMembers, 187));






// Who has have been in at least 3 films?
function getAtleastThreeFilms(academyMembers) {
    let numAcademyMembers = academyMembers.length;
    let films = [];
    let numFilms = films.length;

    for (let i = 0; i < numAcademyMembers; i++) {
        if (academyMembers[i].films.length >= 3) {
            films.push(academyMembers[i].name)
        }
        

    }
    return films;

}

console.log(getAtleastThreeFilms(academyMembers));

// Who has a name that starts with "Bob"?

function getBob(academyMembers) {
    let numAcademyMembers = academyMembers.length;
    let bob = [];
    

    for (let i = 0; i < numAcademyMembers; i++) {
        if (academyMembers[i].name.indexOf("Bob ")!=-1)  {
            bob.push(academyMembers[i].name)
        }
        

    }
    return bob;

}

console.log(getBob(academyMembers));


// HARDER: Which Academy Members have been in a film



///that starts with "A"
function getAFilms(academyMembers){
    let numAcademyMembers = academyMembers.length;
    let AFilmsArray = [];


    for(let i = 0; i< numAcademyMembers; i++){
        
        
        
        console.log(academyMembers[i].films.indexOf("A"));
        AFilmsArray[]
    }

}

getAFilms(academyMembers)



/*
function getMembersFilmsA(academyMembers) {
    let numAcademyMembers = academyMembers.length;
    let nameMember = [];
    

    for (let i = 0; i < numAcademyMembers; i++) {
        if ((academyMembers[i].films).indexOf()=="A")  {
            nameMember.push(academyMembers[i].name)
            
        }
        

    }
    return nameMember;

}

console.log(getMembersFilmsA(academyMembers));
*/