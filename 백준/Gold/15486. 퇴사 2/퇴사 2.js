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
  const calender = input.slice(1).map((line) => line.split(" ").map(Number));
  const dp = Array(N + 2).fill(0);

  for (let i = 0; i < N; i++) {
    const [T, P] = calender[i];

    if (i + T <= N) {
      dp[i + T] = Math.max(dp[i + T], dp[i] + P);
    }

    dp[i + 1] = Math.max(dp[i + 1], dp[i]);
  }

  console.log(Math.max(...dp));
}