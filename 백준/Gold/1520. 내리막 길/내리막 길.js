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
  const [M, N] = input[0].split(" ").map(Number);
  const map = input.slice(1).map((e) => e.split(" ").map(Number));
  const dp = Array.from({ length: M }, () => Array(N).fill(-1));
  const dir = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const dfs = (row, col) => {
    if (row === M - 1 && col === N - 1) return 1;
    if (dp[row][col] !== -1) return dp[row][col];

    dp[row][col] = 0;
    for (let i = 0; i < 4; i++) {
      const nRow = row + dir[i][0];
      const nCol = col + dir[i][1];
      if (
        nRow >= 0 &&
        nRow < M &&
        nCol >= 0 &&
        nCol < N &&
        map[row][col] > map[nRow][nCol]
      ) {
        dp[row][col] += dfs(nRow, nCol);
      }
    }

    return dp[row][col];
  };

  console.log(dfs(0, 0));
}