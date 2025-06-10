const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin, // 백준 제출 시
  // input: fs.createReadStream("./example.txt"), // 로컬 테스트용
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});

function solution(input) {
  let S = +input[0];
  let result = 0;
  let cur = 1;

  while (S >= 0) {
    S -= cur;
    cur++;
    result++;
  }

  console.log(result - 1);
}