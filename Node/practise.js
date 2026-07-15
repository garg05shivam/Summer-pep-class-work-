const fs = require("fs");
const path = require("path");

const fileName = path.join(__dirname, "hello.txt");

fs.readFile(fileName, "utf8", (error, data) => {
  if (error) {
    console.log("Something went wrong:", error.message);
    return;
  }

  console.log("File content:");
  console.log(data);
});
