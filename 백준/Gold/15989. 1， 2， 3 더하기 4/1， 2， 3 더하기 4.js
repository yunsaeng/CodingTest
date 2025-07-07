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
  const T = +input[0];
  const testCases = input.slice(1).map(Number);
  const dp = Array.from({ length: 10001 }, () => Array(4).fill(0));
  dp[1][1] = 1;

  dp[2][1] = 1;
  dp[2][2] = 1;

  dp[3][1] = 1;
  dp[3][2] = 1;
  dp[3][3] = 1;

  for (let i = 4; i < 10001; i++) {
    dp[i][1] = dp[i - 1][1];
    dp[i][2] = dp[i - 2][1] + dp[i - 2][2];
    dp[i][3] = dp[i - 3][1] + dp[i - 3][2] + dp[i - 3][3];
  }

  const result = [];
  for (const testCase of testCases) {
    const temp = dp[testCase].reduce((acc, cur) => acc + cur, 0);
    result.push(temp);
  }

  console.log(result.join("\n"));
}