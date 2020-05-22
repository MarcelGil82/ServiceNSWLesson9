// const fs = require("fs");
// const path = require("path");
// // File System
// // 1. 
// function writeFile(fileName, content) {
//     fs.writeFileSync(path.join(__dirname, fileName), content);
// }
// // writeFile("TestEx1.json", "Hi There")  // this creates a new file

// // // 2.
// function readFile (fileName) {
//     fs.readFileSync(path.join(__dirname, fileName)).toString();
// }
// let myFile = readFile("test.txt");
// // console.log(myFile);

// JSON
// 1.
// class Student {
//     constructor(firstName, lastName, age, grades) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.grades = grades
//     }

//     getStudentJson() {
//         return JSON.stringify(this); // 'this' is what the 
//     }


//     // let Marcel = new Student("Marcel", "Gil", 23, [90, 95, 98]);
//     // let MarcelasJSON = JSON.stringify(Marcel);
//     // console.log(MarcelasJSON);
//     // 2.
//     static toStudent(jsonStudent) {
//         let obj = JSON.parse(jsonStudent);
//         return new Student(obj, firstName, obj.lastName, obj.age, obj.grades);
//     }
// }


// let marcelJSON = { "firstName": "Marcel", "lastName": "Gil", "age": 23, "grades": [90, 95, 98] }
// let marcelStudent = Student.toStudent(marcelJSON);
// console.log(marcelStudent);
// console.log(marcelStudent.getFullName());

// 1.