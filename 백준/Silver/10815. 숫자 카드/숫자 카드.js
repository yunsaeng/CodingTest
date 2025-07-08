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
  const sequence = new Set(input[1].split(" "));
  const M = +input[2];
  const testCases = input[3].split(" ");

  const result = testCases.reduce((acc, cur) => {
    acc.push(sequence.has(cur) ? 1 : 0);
    return acc;
  }, []);

  console.log(result.join(" "));
}