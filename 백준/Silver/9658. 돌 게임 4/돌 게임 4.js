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
  const dp = Array(N + 1).fill(false);

  dp[1] = false;
  if (N >= 2) dp[2] = true;
  if (N >= 3) dp[3] = false;
  if (N >= 4) dp[4] = true;

  for (let i = 5; i <= N; i++) {
    if (!dp[i - 1] || !dp[i - 3] || !dp[i - 4]) {
      dp[i] = true;
    }
  }

  console.log(dp[N] ? "SK" : "CY");
}