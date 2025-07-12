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
  const sequence = input.slice(1).map(Number);
  const pos = sequence.filter((e) => e > 1).sort((a, b) => b - a);
  const ones = sequence.filter((e) => e === 1);
  const neg = sequence.filter((e) => e < 1).sort((a, b) => a - b);

  let answer = 0;
  while (pos.length > 0) {
    const last = pos.shift();
    if (pos.length > 0) answer += last * pos.shift();
    else answer += last;
  }

  answer += ones.length;

  while (neg.length > 0) {
    const last = neg.shift();
    if (neg.length > 0) answer += last * neg.shift();
    else answer += last;
  }

  console.log(answer);
}