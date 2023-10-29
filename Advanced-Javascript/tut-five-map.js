num = [2, 4, 6, 8, 9];
console.log(num);
const newnum = num.map((element, index) => (element *= 2 + index));
console.log(num);
console.log(newnum);
