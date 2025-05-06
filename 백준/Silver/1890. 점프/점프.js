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
  const board = input.slice(1).map((line) => line.split(" ").map(Number));
  const dp = Array.from({ length: N }, () => Array(N).fill(0n));
  dp[0][0] = 1n;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const jump = board[i][j];
      if (jump === 0 || dp[i][j] === 0n) continue;

      if (i + jump < N) dp[i + jump][j] += dp[i][j];
      if (j + jump < N) dp[i][j + jump] += dp[i][j];
    }
  }

  console.log(dp[N - 1][N - 1].toString());
}