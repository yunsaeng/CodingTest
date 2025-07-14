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
  const board = input.slice(1).map((line) => line.split(" ").map(Number));

  const dp = Array.from({ length: N }, () => Array(M).fill(0));
  dp[0][0] = board[0][0];
  for (let col = 1; col < M; col++) {
    dp[0][col] = dp[0][col - 1] + board[0][col];
  }

  for (let row = 1; row < N; row++) {
    const left = Array(M).fill(0);
    const right = Array(M).fill(0);

    left[0] = dp[row - 1][0] + board[row][0];
    for (let col = 1; col < M; col++) {
      left[col] = Math.max(dp[row - 1][col], left[col - 1]) + board[row][col];
    }

    right[M - 1] = dp[row - 1][M - 1] + board[row][M - 1];
    for (let col = M - 2; col >= 0; col--) {
      right[col] = Math.max(dp[row - 1][col], right[col + 1]) + board[row][col];
    }

    for (let col = 0; col < M; col++)
      dp[row][col] = Math.max(left[col], right[col]);
  }

  console.log(dp[N - 1][M - 1]);
}