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
  const dp = Array(N + 1).fill(0);
  const prevArr = Array(N + 1).fill(0);

  for (let i = 2; i <= N; i++) {
    dp[i] = dp[i - 1] + 1;
    prevArr[i] = i - 1;

    if (i % 2 === 0 && dp[i / 2] + 1 < dp[i]) {
      dp[i] = dp[i / 2] + 1;
      prevArr[i] = i / 2;
    }

    if (i % 3 === 0 && dp[i / 3] + 1 < dp[i]) {
      dp[i] = dp[i / 3] + 1;
      prevArr[i] = i / 3;
    }
  }

  const path = [];
  let cur = N;
  while (cur !== 0) {
    path.push(cur);
    cur = prevArr[cur];
  }

  console.log(dp[N]);
  console.log(path.join(" "));
}