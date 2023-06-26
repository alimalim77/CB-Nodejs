const buffer = Buffer.alloc(13);
console.log(buffer);

const buff = Buffer.alloc(3, 3);
console.log(buff);

const buffer_three = Buffer.allocUnsafe(14);
console.log(buffer_three);

buffer_three.fill(4);
console.log(buffer_three);

buffer_three.write("Hello Nodejs!");
console.log(buffer_three);
