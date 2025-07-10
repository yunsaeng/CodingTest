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
  const weights = input[1].split(" ").map(Number);
  const marbles = input[3].split(" ").map(Number);
  const totalWeight = weights.reduce((acc, cur) => acc + cur, 0);

  let dp = Array(totalWeight + 1).fill(false);

  for (const weight of weights) {
    let temp = [...dp];
    for (let i = 0; i <= totalWeight; i++) {
      if (dp[i]) {
        if (i + weight <= totalWeight) temp[i + weight] = true;
        temp[Math.abs(i - weight)] = true;
      }
    }
    temp[weight] = true;
    dp = [...temp];
  }

  const answer = [];
  for (const marble of marbles) answer.push(dp[marble] ? "Y" : "N");
  console.log(answer.join(" "));
}