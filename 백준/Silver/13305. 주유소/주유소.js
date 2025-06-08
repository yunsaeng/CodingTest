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
  const len = input[1].split(" ").map(Number);
  const oil = input[2].split(" ").map(Number);
  const city = len.length;

  for (let i = 1; i < city; i++) {
    for (let j = 0; j < i; j++) {
      oil[i] = Math.min(oil[i], oil[j]);
    }
  }

  let result = 0;
  for (let i = 0; i < city; i++) result += oil[i] * len[i];

  console.log(result);
}