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
  const T = +input[2];
  const queries = input.slice(3).map((line) => line.split(" ").map(Number));

  const dp = Array.from({ length: N }, () => Array(N).fill(0));

  // 길이 1
  for (let i = 0; i < N; i++) dp[i][i] = 1;

  // 길이 2
  for (let i = 0; i < N - 1; i++) {
    if (seq[i] === seq[i + 1]) dp[i][i + 1] = 1;
  }

  // 길이 3 이상
  for (let len = 3; len <= N; len++) {
    for (let start = 0; start <= N - len; start++) {
      const end = start + len - 1;
      if (seq[start] === seq[end] && dp[start + 1][end - 1] === 1) {
        dp[start][end] = 1;
      }
    }
  }

  const output = [];
  for (const [s, e] of queries) {
    output.push(dp[s - 1][e - 1]);
  }

  console.log(output.join("\n"));
}