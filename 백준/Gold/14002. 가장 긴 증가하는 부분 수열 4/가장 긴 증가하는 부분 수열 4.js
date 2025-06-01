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
  const dp = Array(N).fill(1);
  const prevIdx = Array(N).fill(-1);

  for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (seq[j] < seq[i]) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          prevIdx[i] = j;
        }
      }
    }
  }

  const answer = [];
  let max = -1;
  let idx = -1;
  for (let i = 0; i < N; i++) {
    if (max < dp[i]) {
      max = dp[i];
      idx = i;
    }
  }

  while (idx !== -1) {
    answer.unshift(seq[idx]);
    idx = prevIdx[idx];
  }

  console.log(max);
  console.log(answer.join(" "));
}