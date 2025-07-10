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
  if (N < 10) {
    console.log(0);
    return;
  }

  const dp = Array.from({ length: N + 1 }, () =>
    Array.from({ length: 10 }, () => Array(1 << 10).fill(0))
  );
  const MOD = 1_000_000_000;

  for (let num = 1; num <= 9; num++) dp[1][num][1 << num] = 1;

  for (let len = 2; len <= N; len++) {
    for (let num = 0; num <= 9; num++) {
      for (let mask = 0; mask < 1 << 10; mask++) {
        if (num - 1 >= 0 && dp[len - 1][num - 1][mask] !== 0) {
          dp[len][num][mask | (1 << num)] += dp[len - 1][num - 1][mask] % MOD;
        }
        if (num + 1 <= 9 && dp[len - 1][num + 1][mask] !== 0) {
          dp[len][num][mask | (1 << num)] += dp[len - 1][num + 1][mask] % MOD;
        }
      }
    }
  }

  let answer = 0;
  for (let num = 0; num <= 9; num++) {
    answer += dp[N][num][(1 << 10) - 1] % MOD;
  }
  console.log(answer % MOD);
}