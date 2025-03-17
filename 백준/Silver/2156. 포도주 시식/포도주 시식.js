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
  const dp = Array(N + 1).fill(0);
  const arr = input.map(Number);

  dp[1] = arr[1];
  if (N >= 2) dp[2] = dp[1] + arr[2];

  for (let i = 3; i <= N; i++) {
    dp[i] = Math.max(
      dp[i - 1],
      dp[i - 2] + arr[i],
      dp[i - 3] + arr[i - 1] + arr[i]
    );
  }

  console.log(dp[N]);
}