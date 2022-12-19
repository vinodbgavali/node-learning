const fs = require("fs");

const first = fs.readFileSync("./Files/file1.txt","utf8");
const second = fs.readFileSync("./Files/file2.txt","utf8")
// console.log(first + second);

fs.writeFileSync("newFile.txt", first +"\n"+ second);
const newfile = fs.readFileSync("newFile.txt","utf8");

console.log(newfile);