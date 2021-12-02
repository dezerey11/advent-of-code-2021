// PART 1 //
const fs = require("fs");

const data = fs.readFileSync("./input.txt", "utf8");
const numbers = data.split("\n").map((num) => parseInt(num, 10));

let count = 0;

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > numbers[i - 1]) {
    count++;
  }
}

console.log(count);

// PART 2 //
let count2 = 0;

let lastSum = numbers[0] + numbers[1] + numbers[2];

for (let i = 1; i < numbers.length - 2; i++) {
  let sum = numbers[i] + numbers[i + 1] + numbers[i + 2];
  if (lastSum < sum) {
    count2++;
  }
  lastSum = sum;
}

console.log(count2);
