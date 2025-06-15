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
  const digit = [0, ...input[0].split("").map(Number)];
  const N = digit.length - 1;
  const dp = Array.from({ length: N + 2 }, () => Array(N + 2).fill(0));

  for (let i = 1; i <= N; i++) {
    if (digit[i] >= 1) dp[i][i] = 1;
  }

  for (let len = 2; len <= N; len++) {
    for (let s = 1; s <= N - len + 1; s++) {
      const e = s + len - 1;
      dp[s][e] += dp[s][e - 1] * dp[e][e];

      const num = digit[e - 1] * 10 + digit[e];
      if (num >= 10 && num <= 26) {
        if (len === 2) dp[s][e]++;
        else dp[s][e] += dp[s][e - 2];
      }

      dp[s][e] %= 1000000;
    }
  }

  console.log(dp[1][N]);
}