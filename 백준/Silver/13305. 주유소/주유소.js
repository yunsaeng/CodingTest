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
  const len = input[1].split(" ").map(BigInt);
  const oil = input[2].split(" ").map(BigInt);

  let result = 0n;
  let minPrice = oil[0];

  for (let i = 0; i < N - 1; i++) {
    result += minPrice * len[i];
    if (oil[i + 1] < minPrice) {
      minPrice = oil[i + 1];
    }
  }

  console.log(result.toString());
}