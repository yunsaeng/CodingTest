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
  const n = input[0].split("").sort((a, b) => b - a);

  const last = n[n.length - 1];
  const sum = n.reduce((acc, cur) => acc + Number(cur), 0);

  if (last === "0" && sum % 3 === 0) console.log(n.join(""));
  else console.log(-1);
}