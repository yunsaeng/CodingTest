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
  const [N, S, M] = input[0].split(" ").map(Number);
  const V = input[1].split(" ").map(Number);

  const dp = Array.from({ length: N + 1 }, () => Array(M + 1).fill(false));
  dp[0][S] = true;

  for (let i = 0; i < N; i++) {
    for (let vol = 0; vol <= M; vol++) {
      if (dp[i][vol]) {
        if (vol + V[i] <= M) dp[i + 1][vol + V[i]] = true;
        if (vol - V[i] >= 0) dp[i + 1][vol - V[i]] = true;
      }
    }
  }

  for (let vol = M; vol >= 0; vol--) {
    if (dp[N][vol]) {
      console.log(vol);
      return;
    }
  }

  console.log(-1);
}