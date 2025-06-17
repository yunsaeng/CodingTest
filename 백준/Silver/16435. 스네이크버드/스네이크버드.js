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
  let [N, L] = input[0].split(" ").map(Number);
  const fruits = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  for (const fruit of fruits) {
    if (fruit <= L) L++;
    else break;
  }
  console.log(L);
}