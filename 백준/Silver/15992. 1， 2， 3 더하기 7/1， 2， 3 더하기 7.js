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
  const testCase = input.slice(1).map((line) => line.split(" ").map(Number));
  const MOD = 1000000009;
  const dp = Array.from({ length: 1001 }, () => Array(1001).fill(0));
  dp[1][1] = 1;
  dp[2][1] = 1;
  dp[3][1] = 1;

  for (let i = 1; i <= 1000; i++) {
    for (let j = 1; j <= i; j++) {
      if (i >= 1) dp[i][j] += dp[i - 1][j - 1];
      if (i >= 2) dp[i][j] += dp[i - 2][j - 1];
      if (i >= 3) dp[i][j] += dp[i - 3][j - 1];
      dp[i][j] %= MOD;
    }
  }

  for (const [n, m] of testCase) {
    console.log(dp[n][m]);
  }
}