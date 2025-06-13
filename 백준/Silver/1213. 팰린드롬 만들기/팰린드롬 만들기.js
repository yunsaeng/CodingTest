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
  const str = input[0].split("").sort().join("");
  const count = {};
  str.replace(/./g, (alpha) => {
    count[alpha] = (count[alpha] || 0) + 1;
  });

  let isOdd = false;
  let isCan = true;
  let mid = "";

  for (const alpha in count) {
    if (count[alpha] % 2 === 1) {
      if (isOdd) {
        isCan = false;
        break;
      } else {
        isOdd = true;
        mid = alpha;
      }
    }

    count[alpha] = Math.floor(count[alpha] / 2);
  }

  if (!isCan) {
    console.log("I'm Sorry Hansoo");
  } else {
    let result = "";
    for (const alpha in count) {
      result += alpha.repeat(count[alpha]);
    }

    result += mid + result.split("").reverse().join("");
    console.log(result);
  }
}