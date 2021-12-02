// PART 1 //
const fs = require("fs");

const data = fs.readFileSync("./input.txt", "utf8");
const directions = data.split("\n").map((direction) => direction.split(" "));

let horizontal = 0;
let depth = 0;

for (let i = 0; i < directions.length; i++) {
  const direction = directions[i][0];
  const num = parseInt(directions[i][1], 10);
  if (direction === "forward") {
    horizontal += num;
  } else if (direction === "down") {
    depth += num;
  } else if (direction === "up") {
    depth -= num;
  }
}

const result = horizontal * depth;

console.log(result);

// PART 2 //

let horizontal2 = 0;
let depth2 = 0;
let aim2 = 0;

for (let i = 0; i < directions.length; i++) {
  const direction = directions[i][0];
  const num = parseInt(directions[i][1], 10);
  if (direction === "forward") {
    horizontal2 += num;
    depth2 += aim2 * num;
  } else if (direction === "down") {
    aim2 += num;
  } else if (direction === "up") {
    aim2 -= num;
  }
}

const result2 = horizontal2 * depth2;

console.log(result2);
