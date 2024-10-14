// const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  // input: fs.createReadStream("./input_boj.txt"),
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});

function solution(input) {
  const alpha = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
  let result = input[0];

  for (let i = 0; i < alpha.length; i++) {
    result = result.replace(new RegExp(alpha[i], "g"), "*");
  }

  console.log(result.length);
}
