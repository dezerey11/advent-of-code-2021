// PART 1 //

const fs = require("fs");

const data = fs.readFileSync("./input.txt", "utf8");
const numbers = data.split("\n");
const map = {};

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers[i].length; j++) {
    if (!map[j] && numbers[i][j] === "1") {
      map[j] = 1;
    } else if (map[j] && numbers[i][j] === "1") {
      map[j]++;
    }
  }
}

//// Gamma rate ////
const numLength = numbers.length;

let gammaRate = "";

for (const key in map) {
  const zeroes = numLength - map[key];
  if (zeroes < map[key]) {
    gammaRate += "1";
  } else {
    gammaRate += "0";
  }
}

//// Epsilon rate ////
let epsilonRate = "";

for (const key in map) {
  const zeroes = numLength - map[key];
  if (zeroes < map[key]) {
    epsilonRate += "0";
  } else {
    epsilonRate += "1";
  }
}

//// Result ////

const result = parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);

// PART 2 //

const countOnes = (arr, column) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][column] === "1") {
      sum++;
    }
  }
  return sum;
};

const filterMatches = (arr, column, str) => {
  return arr.filter((bits) => bits[column] === str);
};

let oxygenArr = numbers;
let i = 0;

while (oxygenArr.length > 1) {
  const ones = countOnes(oxygenArr, i);
  const zeroes = oxygenArr.length - ones;
  if (zeroes > ones) {
    oxygenArr = filterMatches(oxygenArr, i, "0");
  } else {
    oxygenArr = filterMatches(oxygenArr, i, "1");
  }
  i++;
}

let co2Arr = numbers;
i = 0;

while (co2Arr.length > 1) {
  const ones = countOnes(co2Arr, i);
  const zeroes = co2Arr.length - ones;
  if (zeroes > ones) {
    co2Arr = filterMatches(co2Arr, i, "1");
  } else {
    co2Arr = filterMatches(co2Arr, i, "0");
  }
  i++;
}

console.log(co2Arr);

const oxygen = parseInt(oxygenArr[0], 2);
const co2 = parseInt(co2Arr[0], 2);

console.log(oxygen * co2);
