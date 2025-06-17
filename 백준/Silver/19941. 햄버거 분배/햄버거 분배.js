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
  const table = input[1].split("");

  let result = 0;
  for (let i = 0; i < N; i++) {
    if (table[i] === "P") {
      for (let j = i - K; j <= i + K; j++) {
        if (j >= 0 && j < N && table[j] === "H") {
          table[j] = "X";
          result++;
          break;
        }
      }
    }
  }

  console.log(result);
}