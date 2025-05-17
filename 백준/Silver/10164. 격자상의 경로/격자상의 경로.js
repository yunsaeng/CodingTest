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
  const [N, M, K] = input[0].split(" ").map(Number);
  const dp = Array.from({ length: N }, () => Array(M).fill(1));

  for (let i = 1; i < N; i++) {
    for (let j = 1; j < M; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  if (K === 0) console.log(dp[N - 1][M - 1]);
  else {
    const row = Math.floor((K - 1) / M);
    const col = (K - 1) % M;
    console.log(dp[row][col] * dp[N - row - 1][M - col - 1]);
  }
}