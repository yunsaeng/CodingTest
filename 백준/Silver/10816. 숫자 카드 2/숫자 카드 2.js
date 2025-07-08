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
  const A = input[1].split(" ").map(Number);
  const M = +input[2];
  const B = input[3].split(" ").map(Number);

  const OFFSET = 10_000_000;
  const count = Array(2 * OFFSET + 1).fill(0); // index: 0 ~ 20,000,000

  for (const num of A) {
    count[num + OFFSET]++;
  }

  const result = B.map((num) => count[num + OFFSET]);
  console.log(result.join(" "));
}