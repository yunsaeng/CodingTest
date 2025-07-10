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
  const meet = input
    .slice(1)
    .map((line) => line.split(" ").map(Number))
    .sort((a, b) => {
      if (a[1] === b[1]) return a[0] - b[0];
      return a[1] - b[1];
    });

  let count = 1;
  let end = meet[0][1];

  for (let i = 1; i < N; i++) {
    if (meet[i][0] >= end) {
      count++;
      end = meet[i][1];
    }
  }

  console.log(count);
}