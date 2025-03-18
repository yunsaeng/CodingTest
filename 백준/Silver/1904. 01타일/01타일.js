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
  const N = +input[0];
  const MOD = 15746;
  const dp = Array(N + 1);
  dp[1] = 1;
  if (N >= 2) dp[2] = 2;
  for (let i = 3; i <= N; i++) dp[i] = (dp[i - 2] + dp[i - 1]) % MOD;

  console.log(dp[N]);
}