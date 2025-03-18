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
  const dp = Array.from({ length: N + 1 }, () => Array(2).fill(0n));
  dp[1][1] = 1n;
  if (N >= 2) dp[2][0] = 1n;

  for (let i = 3; i <= N; i++) {
    dp[i][0] = dp[i - 1][0] + dp[i - 1][1];
    dp[i][1] = dp[i - 1][0];
  }

  console.log((dp[N][0] + dp[N][1]).toString());
}