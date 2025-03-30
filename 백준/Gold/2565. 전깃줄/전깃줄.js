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
  const connect = input
    .slice(1)
    .map((e) => e.split(" ").map(Number))
    .sort((a, b) => a[0] - b[0]);
  const dp = Array(N).fill(1);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (connect[i][1] > connect[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  console.log(N - Math.max(...dp));
}