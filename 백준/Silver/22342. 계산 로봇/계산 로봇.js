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
  const [M, N] = input[0].split(" ").map(Number);
  const weights = input.slice(1).map((line) => line.split("").map(Number));
  const save = Array.from({ length: M }, () => Array(N).fill(0));
  const output = Array.from({ length: M }, () => Array(N).fill(0));

  for (let i = 0; i < M; i++) output[i][0] = weights[i][0];

  for (let j = 1; j < N; j++) {
    for (let i = 0; i < M; i++) {
      save[i][j] = output[i][j - 1];
      if (i > 0) save[i][j] = Math.max(save[i][j], output[i - 1][j - 1]);
      if (i < M - 1) save[i][j] = Math.max(save[i][j], output[i + 1][j - 1]);
      output[i][j] = save[i][j] + weights[i][j];
    }
  }

  let maxSaved = 0;
  for (let i = 0; i < M; i++) {
    for (let j = 1; j < N; j++) {
      maxSaved = Math.max(maxSaved, save[i][j]);
    }
  }

  console.log(maxSaved);
}