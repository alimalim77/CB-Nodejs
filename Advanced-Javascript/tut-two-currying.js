//Curring callbacks
const higherOrderCallback = (a) => {
  const middleOrderCallback = (b) => {
    const lowerOrderCallback = (c) => {
      return a + b + c;
    };
    return lowerOrderCallback;
  };
  return middleOrderCallback;
};

console.log(higherOrderCallback(2)(5)(8));
