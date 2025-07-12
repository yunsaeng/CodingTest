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
  const str = input[0];
  const N = str.length;
  const isPalindrome = Array.from({ length: N }, () => Array(N).fill(false));
  for (let i = 0; i < N; i++) {
    isPalindrome[i][i] = true;
  }

  for (let len = 2; len <= N; len++) {
    for (let start = 0; start <= N - len; start++) {
      const end = start + len - 1;

      if (str[start] === str[end]) {
        if (len === 2) isPalindrome[start][end] = true;
        else {
          isPalindrome[start][end] = isPalindrome[start + 1][end - 1];
        }
      }
    }
  }

  const dp = Array(N).fill(Infinity);
  for (let i = 0; i < N; i++) {
    for (let j = 0; j <= i; j++) {
      if (isPalindrome[j][i]) {
        dp[i] = Math.min(dp[i], j === 0 ? 1 : dp[j - 1] + 1);
      }
    }
  }

  console.log(dp[N - 1]);
}