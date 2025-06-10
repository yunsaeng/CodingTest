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
  let [A, B] = input[0].split(" ").map(Number);
  let result = 1;

  while (B > A) {
    if (B % 10 === 1) B = Math.floor(B / 10);
    else if (B % 2 === 0) B /= 2;
    else {
      result = -1;
      break;
    }
    result++;
  }

  if (B < A) result = -1;

  console.log(result);
}