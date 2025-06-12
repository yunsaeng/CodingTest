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
  const m = input[1].split(" ").map(Number);
  const c = input[2].split(" ").map(Number);
  const MAX = 10000;
  const dp = Array(MAX + 1).fill(0);

  for (let i = 0; i < N; i++) {
    const memo = m[i];
    const cost = c[i];

    for (let j = MAX; j >= cost; j--) {
      dp[j] = Math.max(dp[j], dp[j - cost] + memo);
    }
  }

  for (let i = 0; i <= MAX; i++) {
    if (dp[i] >= M) {
      console.log(i);
      return;
    }
  }
}