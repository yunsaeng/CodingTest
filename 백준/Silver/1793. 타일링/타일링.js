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
  const T = input.map(Number);
  const dp = Array(251).fill(0n);
  dp[0] = 1n;
  dp[1] = 1n;
  for (let i = 2; i <= 250; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] * 2n;
  }

  for (const t of T) {
    console.log(dp[t].toString());
  }
}