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
  const [N, D] = input[0].split(" ").map(Number);
  const shortcuts = input.slice(1).map((line) => line.split(" ").map(Number));
  const dp = Array(D + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i <= D; i++) {
    if (i > 0) dp[i] = Math.min(dp[i], dp[i - 1] + 1);

    for (const [start, end, cost] of shortcuts) {
      if (start === i && end <= D) {
        dp[end] = Math.min(dp[end], dp[start] + cost);
      }
    }
  }

  console.log(dp[D]);
}