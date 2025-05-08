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
  const T = +input[0];
  const testCases = input.slice(1).reduce((acc, cur, idx) => {
    if (idx % 3 === 0) acc.push([]);
    acc[acc.length - 1].push(cur);
    return acc;
  }, []);

  const result = [];
  for (let i = 0; i < T; i++) {
    const test = testCases[i];
    const coins = test[1].split(" ").map(Number);
    const goalPrice = +test[2];
    const dp = Array(goalPrice + 1).fill(0);

    dp[0] = 1;
    for (const coin of coins) {
      for (let amount = coin; amount <= goalPrice; amount++) {
        dp[amount] += dp[amount - coin];
      }
    }

    result.push(dp[goalPrice]);
  }

  console.log(result.join("\n"));
}