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
  const prices = [0, ...input[1].split(" ").map(Number)];
  const dp = Array(N + 1).fill(0);
  for (let i = 1; i <= N; i++) {
    for (let j = i; j <= N; j++) {
      dp[j] = Math.max(dp[j], dp[j - i] + prices[i]);
    }
  }
  console.log(dp[N]);
}