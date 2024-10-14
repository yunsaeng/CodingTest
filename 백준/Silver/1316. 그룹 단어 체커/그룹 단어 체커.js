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
  let result = 0;

  for (let i = 1; i <= CASE_COUNT; i++) {
    let word = input[i];
    let temp = [];
    let isGroup = true;
    for (let j = 0; j < word.length; j++) {
      if (temp.indexOf(word[j]) === -1) {
        temp.push(word[j]);
      } else {
        if (temp.indexOf(word[j]) !== temp.length - 1) {
          isGroup = false;
          break;
        }
      }
    }
    if (isGroup) {
      result++;
    }
  }

  console.log(result);
}
