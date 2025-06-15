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
  const [N, M] = input[0].split(" ").map(Number);
  const A = input.slice(1, 1 + N).map((line) => line.split("").map(Number));
  const B = input.slice(1 + N).map((line) => line.split("").map(Number));

  const flip = (x, y) => {
    for (let i = x; i < x + 3; i++) {
      for (let j = y; j < y + 3; j++) {
        A[i][j] = 1 - A[i][j]; // 0 → 1, 1 → 0
      }
    }
  };

  let count = 0;
  for (let i = 0; i <= N - 3; i++) {
    for (let j = 0; j <= M - 3; j++) {
      if (A[i][j] !== B[i][j]) {
        flip(i, j);
        count++;
      }
    }
  }

  let isEqual = true;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (A[i][j] !== B[i][j]) {
        isEqual = false;
        break;
      }
    }
    if (!isEqual) break;
  }

  console.log(isEqual ? count : -1);
}