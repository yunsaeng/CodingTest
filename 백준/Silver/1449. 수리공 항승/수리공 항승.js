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
  const [N, L] = input[0].split(" ").map(Number);
  const water = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let count = 0;
  let position = 0;

  for (let i = 0; i < N; i++) {
    if (water[i] > position) {
      count++;
      position = water[i] + L - 1;
    }
  }

  console.log(count);
}