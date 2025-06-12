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
  const compressed = input[0].replace(/(\d)\1+/g, "$1");
  const zeroCount = (compressed.match(/0/g) || []).length;
  const oneCount = (compressed.match(/1/g) || []).length;

  console.log(Math.min(zeroCount, oneCount));
}