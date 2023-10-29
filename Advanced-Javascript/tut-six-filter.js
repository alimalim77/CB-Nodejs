num = [2, 3, 4, 5, 6, 7, 8, 9];
const teams = [
  "PSG",
  "Man United",
  "Newcastle United",
  "FC Barcelona",
  "Real Madrid",
];
const res = num.filter((ele) => ele % 2 == 0);
const resTwo = teams.filter((ele) => ele.includes("United"));

console.log(resTwo);
