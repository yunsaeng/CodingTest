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
  const coins = [2, 5];
  const dp = Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;

  for (let i = 2; i <= N; i++) {
    for (const coin of coins) {
      if (dp[i - coin] === Number.MAX_SAFE_INTEGER || i - coin < 0) continue;
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  console.log(dp[N] === Number.MAX_SAFE_INTEGER ? -1 : dp[N]);
}