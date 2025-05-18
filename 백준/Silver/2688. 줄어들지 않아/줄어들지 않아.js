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
  const T = +input[0];
  const N = input.slice(1).map(Number);
  const dp = Array.from({ length: 65 }, () => Array(10).fill(0));

  for (let i = 0; i <= 9; i++) dp[1][i] = 1;
  for (let i = 2; i <= 64; i++) {
    for (let j = 0; j <= 9; j++) {
      for (let k = 0; k <= j; k++) {
        dp[i][j] += dp[i - 1][k];
      }
    }
  }

  for (const n of N) {
    console.log(dp[n].reduce((acc, cur) => acc + cur, 0));
  }
}