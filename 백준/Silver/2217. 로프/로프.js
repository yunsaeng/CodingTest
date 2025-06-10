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
  const N = +input[0];
  const rope = input.slice(1).map(Number).flat();
  rope.sort((a, b) => b - a);

  let result = 0;
  for (let k = N; k >= 1; k--) {
    result = Math.max(result, k * rope[k - 1]);
  }

  console.log(result);
}