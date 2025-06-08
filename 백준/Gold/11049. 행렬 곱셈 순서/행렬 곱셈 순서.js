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
  const matrix = Array.from({ length: N }, (_, i) => {
    const [r, c] = input[i + 1].split(" ").map(Number);
    return Array.from({ length: N }, (_, j) => (i === j ? [r, c] : [0, 0]));
  });

  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      matrix[i][j][0] = matrix[i][i][0];
      matrix[i][j][1] = matrix[j][j][1];
    }
  }

  const dp = Array.from({ length: N }, () => Array(N).fill(Infinity));
  for (let i = 0; i < N; i++) dp[i][i] = 0;

  for (let len = 2; len <= N; len++) {
    for (let s = 0; s <= N - len; s++) {
      const e = s + len - 1;

      for (let k = s; k < e; k++) {
        const cost =
          dp[s][k] +
          dp[k + 1][e] +
          matrix[s][s][0] * matrix[k][k][1] * matrix[e][e][1];
        dp[s][e] = Math.min(dp[s][e], cost);
      }
    }
  }

  console.log(dp[0][N - 1]);
}