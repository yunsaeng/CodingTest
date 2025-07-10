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
  const W = input.slice(1).map((line) => line.split(" ").map(Number));

  const dp = Array.from({ length: 1 << N }, () => Array(N).fill(Infinity));
  dp[1][0] = 0;

  for (let mask = 1; mask < 1 << N; mask++) {
    for (let u = 0; u < N; u++) {
      if (!(mask & (1 << u))) continue;

      for (let v = 0; v < N; v++) {
        if (mask & (1 << v)) continue;
        if (W[u][v] === 0) continue;
        const next = mask | (1 << v);
        dp[next][v] = Math.min(dp[next][v], dp[mask][u] + W[u][v]);
      }
    }
  }

  let answer = Infinity;
  for (let last = 1; last < N; last++) {
    if (W[last][0] === 0) continue;
    answer = Math.min(answer, dp[(1 << N) - 1][last] + W[last][0]);
  }

  console.log(answer);
}