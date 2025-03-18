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
  const [N, M] = input[0].split(" ").map(Number);
  const board = input
    .slice(1, N + 1)
    .map((line) => line.split(" ").map(Number));
  const points = input.slice(N + 1).map((line) => line.split(" ").map(Number));

  const dp = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
  for (let x = 1; x <= N; x++) {
    for (let y = 1; y <= N; y++) {
      dp[x][y] =
        board[x - 1][y - 1] + dp[x - 1][y] + dp[x][y - 1] - dp[x - 1][y - 1];
    }
  }

  for (let tc = 0; tc < M; tc++) {
    const [x1, y1, x2, y2] = points[tc];
    const value =
      dp[x2][y2] - dp[x1 - 1][y2] - dp[x2][y1 - 1] + dp[x1 - 1][y1 - 1];
    console.log(value);
  }
}