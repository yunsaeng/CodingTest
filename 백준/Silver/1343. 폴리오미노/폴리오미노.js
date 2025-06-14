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

  let result = [];
  for (let s of str) {
    if (s.length % 2 === 1) {
      result = -1;
      break;
    }

    let temp = "";
    while (s.length >= 4) {
      temp += "AAAA";
      s = s.substr(4);
    }

    if (s) temp += "BB";

    result.push(temp);
  }

  console.log(result === -1 ? -1 : result.join("."));
}