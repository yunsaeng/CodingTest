// const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  // input: fs.createReadStream("./input_boj.txt"),
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});

function solution(input) {
  const CASE_COUNT = Number(input[0]);
  let result = [];

  for (let i = 1; i <= CASE_COUNT; i++) {
    result.push(input[i]);
  }

  Array.from(new Set(result))
    .sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))
    .sort((a, b) => a.length - b.length)
    .forEach((word) => console.log(word));
}
