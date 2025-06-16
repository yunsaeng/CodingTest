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
  const formula = input[1].split(" ").map(Number);
  const dp = Array.from({ length: N }, () => Array(21).fill(0n));
  dp[0][formula[0]]++;

  for (let i = 1; i < N - 1; i++) {
    for (let sum = 0; sum <= 20; sum++) {
      if (dp[i - 1][sum] !== 0n) {
        const plus = sum + formula[i];
        if (plus >= 0 && plus <= 20) dp[i][plus] += dp[i - 1][sum];
        const minus = sum - formula[i];
        if (minus >= 0 && minus <= 20) dp[i][minus] += dp[i - 1][sum];
      }
    }
  }

  console.log(dp[N - 2][formula[N - 1]].toString());
}