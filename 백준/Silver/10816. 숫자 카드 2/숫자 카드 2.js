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
  const sequence = input[1].split(" ");
  const M = +input[2];
  const testCases = input[3].split(" ");

  const sequenceMap = new Map();
  for (const value of sequence) {
    if (sequenceMap.has(value))
      sequenceMap.set(value, sequenceMap.get(value) + 1);
    else sequenceMap.set(value, 1);
  }

  const result = testCases.reduce((acc, cur) => {
    if (sequenceMap.has(cur)) acc.push(sequenceMap.get(cur));
    else acc.push(0);

    return acc;
  }, []);

  console.log(result.join(" "));
}