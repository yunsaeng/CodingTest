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
  const string_M = input[0];
  const string_N = input[1];
  const M = string_M.length;
  const N = string_N.length;
  const dp = Array.from({ length: M + 1 }, () => Array(N + 1).fill(0));

  for (let i = 1; i <= M; i++) {
    for (let j = 1; j <= N; j++) {
      if (string_M[i - 1] === string_N[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  const answer = [];
  let i = M;
  let j = N;
  while (dp[i][j] !== 0) {
    if (dp[i][j] === dp[i - 1][j]) i--;
    else if (dp[i][j] === dp[i][j - 1]) j--;
    else {
      answer.unshift(string_M[i - 1]);
      i--;
      j--;
    }
  }

  console.log(dp[M][N]);
  if (answer.length !== 0) console.log(answer.join(""));
}