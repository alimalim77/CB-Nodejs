const fs = require("fs");
const process = require("process");

try {
  const data = fs.readFileSync("text.txt", "utf8");
  console.log(data);
} catch (err) {
  console.error(err);
}

secret = "Peter is best!";
fs.writeFile("text.txt", secret, (err) => {
  if (err) {
    throw err;
    return;
  }
  console.log("file written");

  fs.readFile("text.txt", "utf-8", (err, data) => {
    if (err) {
      throw err;
      return;
    }
    console.log(data);
  });
});
