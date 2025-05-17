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
  const VIP = input.slice(2).map(Number);
  const dp = Array(N + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= N; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  let result = 1;
  let cur = 0;
  for (const v of VIP) {
    result *= dp[v - cur - 1];
    cur = v;
  }
  result *= dp[N - cur];

  console.log(result);
}