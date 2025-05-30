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
  const a = input[1].split(" ").map(Number);
  const dp = new Map();
  let maxLen = 1;

  for (let i = 0; i < N; i++) {
    const val = a[i];
    const prev = dp.get(val - 1) || 0;
    const curr = prev + 1;

    dp.set(val, curr);
    maxLen = Math.max(maxLen, curr);
  }

  console.log(maxLen);
}