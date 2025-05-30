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
  const board = input.slice(1).map((line) => line.split(" ").map(Number));
  const dp = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => Array(3).fill(0))
  );
  dp[0][1][0] = 1;

  for (let i = 0; i < N; i++) {
    for (let j = 2; j < N; j++) {
      if (j - 1 >= 0 && board[i][j] !== 1)
        dp[i][j][0] = dp[i][j - 1][0] + dp[i][j - 1][2];

      if (i - 1 >= 0 && board[i][j] !== 1)
        dp[i][j][1] = dp[i - 1][j][1] + dp[i - 1][j][2];

      if (
        i - 1 >= 0 &&
        j - 1 >= 0 &&
        board[i][j] !== 1 &&
        board[i - 1][j] !== 1 &&
        board[i][j - 1] !== 1
      )
        dp[i][j][2] =
          dp[i - 1][j - 1][0] + dp[i - 1][j - 1][1] + dp[i - 1][j - 1][2];
    }
  }

  console.log(dp[N - 1][N - 1][0] + dp[N - 1][N - 1][1] + dp[N - 1][N - 1][2]);
}