num = [2, 4, 6, 8, 9];
res = 0;
num.forEach((element, idx, num) => {
  console.log(element, idx);
  console.log(num);
  res += element;
  element *= 2;
});

console.log(num);
