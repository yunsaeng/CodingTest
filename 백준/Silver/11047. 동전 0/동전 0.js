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
  let [N, K] = input[0].split(" ").map(Number);
  const coins = input.slice(1).reverse().map(Number);
  let result = 0;

  for (const coin of coins) {
    result += Math.floor(K / coin);
    K %= coin;
  }

  console.log(result);
}