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
  const str = input[0].split(".");
  const result = [];
  let isPossible = true;

  for (let s of str) {
    if (s.length % 2 === 1) {
      isPossible = false;
      break;
    }

    let temp = "";
    temp += "AAAA".repeat(Math.floor(s.length / 4));
    if (s.length % 4 !== 0) temp += "BB";

    result.push(temp);
  }

  console.log(isPossible ? result.join(".") : -1);
}