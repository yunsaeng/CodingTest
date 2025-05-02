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
  const seq = input[1].split(" ").map(Number);
  const dp = Array.from({ length: N }, (_, i) => seq[i]);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (seq[i] > seq[j]) {
        dp[i] = Math.max(dp[i], dp[j] + seq[i]);
      }
    }
  }

  console.log(Math.max(...dp));
}