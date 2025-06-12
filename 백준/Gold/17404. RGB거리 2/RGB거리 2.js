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
  const paint = input.slice(1).map((line) => line.split(" ").map(Number));
  const dp = Array.from({ length: N }, () =>
    Array.from({ length: 3 }, () => Array(3).fill(Infinity))
  );
  const [r, g, b] = [0, 1, 2];
  dp[0][r][r] = paint[0][r];
  dp[0][g][g] = paint[0][g];
  dp[0][b][b] = paint[0][b];

  for (let startColor = r; startColor <= b; startColor++) {
    for (let cur = 1; cur < N; cur++) {
      for (let curColor = r; curColor <= b; curColor++) {
        if (curColor === startColor && cur === N - 1) continue;
        if (curColor === r) {
          dp[cur][curColor][startColor] = Math.min(
            dp[cur - 1][g][startColor],
            dp[cur - 1][b][startColor]
          );
        } else if (curColor === g) {
          dp[cur][curColor][startColor] = Math.min(
            dp[cur - 1][r][startColor],
            dp[cur - 1][b][startColor]
          );
        } else if (curColor === b) {
          dp[cur][curColor][startColor] = Math.min(
            dp[cur - 1][r][startColor],
            dp[cur - 1][g][startColor]
          );
        }
        dp[cur][curColor][startColor] += paint[cur][curColor];
      }
    }
  }

  console.log(Math.min(...dp[N - 1].flat()));
}