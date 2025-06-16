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
  const line = input.slice(1).map(Number);
  const dp = Array(N).fill(1);

  for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (line[j] < line[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }

  console.log(N - Math.max(...dp));
}