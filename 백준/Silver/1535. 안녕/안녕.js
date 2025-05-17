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
  const L = input[1].split(" ").map(Number);
  const J = input[2].split(" ").map(Number);
  const dp = Array(100).fill(0);

  for (let i = 0; i < N; i++) {
    for (let j = 99; j >= L[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - L[i]] + J[i]);
    }
  }

  console.log(dp[99]);
}