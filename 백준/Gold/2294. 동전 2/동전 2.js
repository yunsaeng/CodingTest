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
  const MAX = 10001;
  const [n, k] = input[0].split(" ").map(Number);
  const coins = input.slice(1).map(Number);
  const dp = Array(k + 1).fill(MAX);

  for (let i = 0; i < n; i++) {
    for (let j = coins[i]; j <= k; j++) {
      if (j === coins[i]) {
        dp[j] = 1;
      } else if (dp[j - coins[i]] !== MAX) {
        dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
      }
    }
  }
  console.log(dp[k] === MAX ? -1 : dp[k]);
}