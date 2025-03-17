const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin, // 백준 제출시 활성화
  // input: fs.createReadStream("./example.txt"), // 로컬 테스트할 때 파일을 통해 입력 받음
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});

function solution(input) {
  const MOD = 1000000000;
  const N = +input[0];
  const dp = Array.from({ length: N + 1 }, () => Array(10).fill(0));

  for (let i = 1; i <= 9; i++) {
    dp[1][i] = 1;
  }

  for (let i = 2; i <= N; i++) {
    dp[i][0] = dp[i - 1][1] % MOD;
    for (let j = 1; j <= 8; j++) {
      dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % MOD;
    }
    dp[i][9] = dp[i - 1][8] % MOD;
  }

  let answer = 0;
  for (let i = 0; i <= 9; i++) {
    answer += dp[N][i];
  }

  console.log(answer % MOD);
}