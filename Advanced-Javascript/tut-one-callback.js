//Higher order functions

// Callback functions
const iAmCallback = () => {
  return "I am so done!";
};

const iAmReal = (iAmCallback) => {
  return iAmCallback() + " with this callback";
};

console.log(iAmReal(iAmCallback));
