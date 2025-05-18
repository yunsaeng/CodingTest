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
  const [D, K] = input[0].split(" ").map(Number);
  const coefA = Array(D).fill(0);
  coefA[0] = 1;
  const coefB = Array(D).fill(0);
  coefB[1] = 1;

  for (let i = 2; i < D; i++) {
    coefA[i] = coefA[i - 2] + coefA[i - 1];
    coefB[i] = coefB[i - 2] + coefB[i - 1];
  }

  for (let b = 1; b * coefB[D - 1] <= K; b++) {
    for (let a = 1; a <= b; a++) {
      if (a * coefA[D - 1] + b * coefB[D - 1] === K) {
        console.log(a);
        console.log(b);
        return;
      }
    }
  }
}