const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin, // 백준 제출시 활성화
  // input: fs.createReadStream("./example.txt"), // 로컬 테스트할 때 파일을 통해 입력 받음
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});

function solution(input) {
  const str = input[0].toUpperCase();
  const obj = {};
  for (const c of str) {
    if (obj.hasOwnProperty(c)) {
      obj[c] += 1;
    } else {
      obj[c] = 1;
    }
  }

  const result = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
  if (result.length === 1) console.log(result[0]);
  else {
    if (obj[result[0]] === obj[result[1]]) console.log("?");
    else console.log(result[0]);
  }
}