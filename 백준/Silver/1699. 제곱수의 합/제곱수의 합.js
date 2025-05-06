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
  const num = Math.floor(Math.sqrt(N));
  const dp = Array.from({ length: N + 1 }, () => Number.MAX_SAFE_INTEGER);
  dp[0] = 0;

  for (let i = 1; i <= num; i++) {
    const temp = i * i;
    for (let j = temp; j <= N; j++) {
      dp[j] = Math.min(dp[j], dp[j - temp] + 1);
    }
  }

  console.log(dp[N]);
}