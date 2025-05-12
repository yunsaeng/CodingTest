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
  const mod = 1000000009;
  const max = 1000000;
  const dp = Array(max + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= max; i++) {
    if (i >= 1) dp[i] = (dp[i] + dp[i - 1]) % mod;
    if (i >= 2) dp[i] = (dp[i] + dp[i - 2]) % mod;
    if (i >= 3) dp[i] = (dp[i] + dp[i - 3]) % mod;
  }

  const result = input.slice(1).map((line) => {
    const N = +line;
    return dp[N];
  });

  console.log(result.join("\n"));
}