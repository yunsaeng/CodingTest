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
  const str1 = input[0];
  const len1 = str1.length;
  const str2 = input[1];
  const len2 = str2.length;

  const dp = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(0));
  let answer = 0;

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        answer = Math.max(answer, dp[i][j]);
      }
    }
  }

  console.log(answer);
}