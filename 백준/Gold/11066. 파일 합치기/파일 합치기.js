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

  for (let t = 0; t < T; t++) {
    const idx = 2 * t + 1;
    const K = +input[idx];
    const fileCosts = input[idx + 1].split(" ").map(Number);
    const dp = Array.from({ length: K }, (_, i) =>
      Array.from({ length: K }, (_, j) => (i === j ? 0 : Infinity))
    );
    const file = Array.from({ length: K }, (_, i) =>
      Array.from({ length: K }, (_, j) => (i === j ? fileCosts[i] : 0))
    );

    for (let i = 0; i < K - 1; i++) {
      for (let j = i + 1; j < K; j++) {
        file[i][j] = file[i][j - 1] + file[j][j];
      }
    }

    for (let len = 2; len <= K; len++) {
      for (let s = 0; s <= K - len; s++) {
        const e = s + len - 1;
        for (let m = s; m < e; m++) {
          dp[s][e] = Math.min(
            dp[s][e],
            dp[s][m] + dp[m + 1][e] + file[s][m] + file[m + 1][e]
          );
        }
      }
    }

    console.log(dp[0][K - 1]);
  }
}