const fs = require("fs");
const path = require("path");
// File System
// 1. 
// function newFile(fileName, content) => {
//     fs.writeFileSync(path.join(__dirname, "MyFile.txt"), "HelloWorld");
// }


// fs.writeFileSync(path.join(__dirname, "MyFile.txt"), "HelloWorld");

// // 2.

// fs.readFileSync(path.join(__dirname, ""));

// JSON
// 1.
class Student {
    constructor(firstName, lastName, age, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.grades = grades
    }
}
jsonString() {
    return JSON.stringify(this);
}

need more