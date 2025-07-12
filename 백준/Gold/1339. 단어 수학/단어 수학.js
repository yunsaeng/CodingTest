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
  const sequence = input.slice(1);
  const alpha = new Map();

  for (const str of sequence) {
    const len = str.length;
    for (let i = 0; i < len; i++) {
      if (!alpha.has(str[i])) alpha.set(str[i], 0);
      alpha.set(str[i], alpha.get(str[i]) + Math.pow(10, len - i - 1));
    }
  }

  let num = 9;
  const answer = [...alpha]
    .sort((a, b) => b[1] - a[1])
    .map((e) => {
      const result = num * e[1];
      num--;
      return result;
    })
    .reduce((acc, cur) => acc + cur, 0);

  console.log(answer);
}