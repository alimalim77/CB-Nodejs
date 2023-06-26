const EventEmit = require("events");

const myEmit = new EventEmit();

function handleError(code) {
  console.log("I am handling", code);
}

myEmit.on("error", handleError);
myEmit.emit("error", 404);
