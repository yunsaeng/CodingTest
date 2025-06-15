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
  for (let t = 1; t <= T; t++) {
    const N = +input[2 * t - 1];
    const lotto = input[2 * t].split(" ").map(Number).reverse();
    let max = lotto[0];
    let result = 0;
    for (let i = 1; i < N; i++) {
      if (max < lotto[i]) max = lotto[i];
      else result += max - lotto[i];
    }

    console.log(result);
  }
}