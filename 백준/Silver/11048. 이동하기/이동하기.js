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
  const [N, M] = input[0].split(" ").map(Number);
  const dp = input.slice(1).map((line) => line.split(" ").map(Number));

  for (let i = 1; i < N; i++) dp[i][0] += dp[i - 1][0];
  for (let i = 1; i < M; i++) dp[0][i] += dp[0][i - 1];
  for (let i = 1; i < N; i++) {
    for (let j = 1; j < M; j++) {
      dp[i][j] += Math.max(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }

  console.log(dp[N - 1][M - 1]);
}