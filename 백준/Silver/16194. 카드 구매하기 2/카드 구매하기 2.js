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
  const P = [0, ...input[1].split(" ").map(Number)];
  const dp = Array(N + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= N; i++) {
    for (let j = i; j <= N; j++) {
      dp[j] = Math.min(dp[j], dp[j - i] + P[i]);
    }
  }

  console.log(dp[N]);
}