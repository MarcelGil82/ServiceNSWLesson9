
// File System (fs)
// this creates a file as .txt - see MyFile.txt

const fs = require("fs");
const path = require("path");

// fs.writeFileSync(path.join(__dirname, "MyFile.txt"), "HelloWorld");
// to have what is in the file i.e. MyFile.txt - in this case HelloWorld

let myText = fs.readFileSync(path.join(__dirname, "MyFile.txt"));
console.log(myText.toString());