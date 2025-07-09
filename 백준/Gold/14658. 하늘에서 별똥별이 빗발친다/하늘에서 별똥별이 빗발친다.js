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
  const [N, M, L, K] = input[0].split(" ").map(Number);
  const stars = input.slice(1).map((line) => line.split(" ").map(Number));
  const dir = [
    [1, 1],
    [-1, 1],
    [-1, -1],
    [1, -1],
  ];

  let maxCount = 0;
  for (const [x1, y1] of stars) {
    for (const [x2, y2] of stars) {
      let count = 0;
      const sx = x1;
      const sy = y2;
      const ex = sx + L;
      const ey = sy + L;

      for (const [x, y] of stars) {
        if (x >= sx && x <= ex && y >= sy && y <= ey) {
          count++;
        }
      }
      maxCount = Math.max(maxCount, count);
    }
  }

  console.log(K - maxCount);
}