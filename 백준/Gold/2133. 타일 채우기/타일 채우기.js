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
  const dp = Array.from({ length: N + 1 }, () => 0);
  dp[0] = 1;
  dp[2] = 3;
  for (let i = 4; i <= N; i += 2) {
    dp[i] = dp[i - 2] * dp[2];
    for (let j = i - 4; j >= 0; j -= 2) {
      dp[i] += dp[j] * 2;
    }
  }

  console.log(dp[N]);
}