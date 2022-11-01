"use strict";

let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];

// When does the PROG200 course start?
function getStartingDate(courses, CourseId) {
    let numCourses = courses.length;

    for (let i = 0; i < numCourses; i++) {
        if (courses[i].CourseId == CourseId) {
            return courses[i].StartDate;
        }

    }
}
console.log(getStartingDate(courses, "PROJ500"));




// What is the title of the PROJ500 course?
function getTitle(courses, CourseId) {
    let numCourses = courses.length;

    for (let i = 0; i < numCourses; i++) {
        if (courses[i].CourseId == CourseId) {
            return courses[i].Title;
        }

    }
}
console.log(getTitle(courses, "PROJ500"));
// What are the titles of the courses that cost $50 or less?

function getFiftyOrLess(courses) {
    let numCourses = courses.length;
    let fiftyOrLess = [];

    for (let i = 0; i < numCourses; i++) {
        if (courses[i].Fee <= 50) {
            fiftyOrLess.push(courses[i].Title);


        }

    }
    return fiftyOrLess;
}
console.log(getFiftyOrLess(courses));

// What classes meet in "Classroom 1"?

function getClassroomOne(courses) {
    let numCourses = courses.length;
    let classroomOne = [];

    for (let i = 0; i < numCourses; i++) {
        if (courses[i].Location == "Classroom 1") {
            classroomOne.push(courses[i].Title);


        }

    }
    return classroomOne;
}
console.log(getClassroomOne(courses));
