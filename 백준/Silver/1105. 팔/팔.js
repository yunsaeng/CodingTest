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
  let [L, R] = input[0].split(" ");
  if (L.length !== R.length) return console.log(0);

  let count = 0;
  for (let i = 0; i < L.length; i++) {
    if (L[i] !== R[i]) break;
    if (L[i] === "8") count++;
  }

  console.log(count);
}