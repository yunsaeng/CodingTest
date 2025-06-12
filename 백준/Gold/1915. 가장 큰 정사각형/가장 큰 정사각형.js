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
  const board = input.slice(1).map((line) => line.split("").map(Number));
  const dp = Array.from({ length: N }, () => Array(M).fill(0));
  let maxLen = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 1) {
        if (i === 0 || j === 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        }
        maxLen = Math.max(maxLen, dp[i][j]);
      }
    }
  }

  console.log(maxLen * maxLen);
}