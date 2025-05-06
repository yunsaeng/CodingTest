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
  const board = input[1].split(" ").map(Number);
  const dp = Array(N).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;

  for (let i = 0; i < N; i++) {
    const jump = board[i];
    if (jump === 0) continue;
    for (let j = i + 1; j <= i + jump && j < N; j++) {
      dp[j] = Math.min(dp[j], dp[i] + 1);
    }
  }

  console.log(dp[N - 1] === Number.MAX_SAFE_INTEGER ? -1 : dp[N - 1]);
}