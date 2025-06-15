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
  const points = input.slice(1).map(Number).reverse();
  let result = 0;
  for (let i = 1; i < N; i++) {
    if (points[i] >= points[i - 1]) {
      const prev = points[i];
      points[i] = points[i - 1] - 1;
      result += prev - points[i];
    }
  }

  console.log(result);
}