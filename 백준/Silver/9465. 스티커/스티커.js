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
  const T = +input[0];

  for (let t = 0; t < T; t++) {
    const tempInput = input.slice(t * 3 + 1, t * 3 + 4);
    const N = +tempInput[0];
    const sticker = tempInput
      .slice(1)
      .map((line) => line.split(" ").map(Number));

    const dp = Array.from({ length: N }, () => Array(2));
    dp[0][0] = sticker[0][0];
    dp[0][1] = sticker[1][0];
    for (let i = 1; i < N; i++) {
      if (i === 1) {
        dp[1][0] = dp[0][1] + sticker[0][1];
        dp[1][1] = dp[0][0] + sticker[1][1];
      } else {
        dp[i][0] = Math.max(dp[i - 1][1], dp[i - 2][1]) + sticker[0][i];
        dp[i][1] = Math.max(dp[i - 1][0], dp[i - 2][0]) + sticker[1][i];
      }
    }
    console.log(Math.max(dp[N - 1][0], dp[N - 1][1]));
  }
}