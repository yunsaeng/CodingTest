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
  const sequence = input[0].split(" ").map(Number);
  sequence.pop();

  let dp = Array.from({ length: 5 }, () => Array(5).fill(Infinity));
  dp[0][0] = 0;

  const cost = (to, from) => {
    if (to === 0) return 2;
    if (to === from) return 1;
    if ((to + 2) % 4 === from % 4) return 4;
    return 3;
  };

  for (const step of sequence) {
    const next = Array.from({ length: 5 }, () => Array(5).fill(Infinity));

    for (let r = 0; r < 5; r++) {
      for (let l = 0; l < 5; l++) {
        if (dp[l][r] === Infinity) continue;

        if (r !== step) {
          const moveCost = cost(l, step);
          next[step][r] = Math.min(next[step][r], dp[l][r] + moveCost);
        }

        if (l !== step) {
          const moveCost = cost(r, step);
          next[l][step] = Math.min(next[l][step], dp[l][r] + moveCost);
        }
      }
    }

    dp = next;
  }

  let answer = Infinity;
  for (let r = 0; r < 5; r++) {
    for (let l = 0; l < 5; l++) {
      answer = Math.min(answer, dp[l][r]);
    }
  }

  console.log(answer);
}