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
  let [N, M] = input[0].split(" ").map(Number);
  const shop = input.slice(1).map((line) => line.split(" ").map(Number));
  const packageCost = shop.sort((a, b) => a[0] - b[0])[0][0];
  const eachCost = shop.sort((a, b) => a[1] - b[1])[0][1];

  if (packageCost >= eachCost * 6) console.log(eachCost * N);
  else {
    let result = 0;
    result += Math.floor(N / 6) * packageCost;
    N %= 6;
    result += packageCost < eachCost * N ? packageCost : eachCost * N;

    console.log(result);
  }
}