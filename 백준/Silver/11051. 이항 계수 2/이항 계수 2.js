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
  const [N, K] = input[0].split(" ").map(Number);
  const MOD = 10007;

  const dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));

  for (let n = 0; n <= N; n++) {
    for (let k = 0; k <= Math.min(n, K); k++) {
      if (k === 0 || k === n) dp[n][k] = 1;
      else dp[n][k] = (dp[n - 1][k - 1] + dp[n - 1][k]) % MOD;
    }
  }

  console.log(dp[N][K]);
}