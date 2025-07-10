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
  const braceValue = { "{": 1, "}": -1 };
  let testCase = 0;
  for (const braces of input) {
    if (braces[0] === "-") break;

    let result = 0;
    let sum = 0;
    testCase++;

    for (const brace of braces) {
      if (sum + braceValue[brace] < 0) {
        sum -= braceValue[brace];
        result++;
      } else sum += braceValue[brace];
    }
    console.log(`${testCase}. ${result + sum / 2}`);
  }
}