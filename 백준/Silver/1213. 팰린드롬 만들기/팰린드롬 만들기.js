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
  const str = input[0];
  const count = Array(26).fill(0);

  for (const ch of str) {
    count[ch.charCodeAt(0) - 65]++;
  }

  let oddChar = "";
  let halfStr = "";

  for (let i = 0; i < 26; i++) {
    const cnt = count[i];
    const ch = String.fromCharCode(i + 65);

    if (cnt % 2 === 1) {
      if (oddChar) {
        console.log("I'm Sorry Hansoo");
        return;
      }
      oddChar = ch;
    }

    halfStr += ch.repeat(Math.floor(cnt / 2));
  }

  const result = halfStr + oddChar + [...halfStr].reverse().join("");
  console.log(result);
}