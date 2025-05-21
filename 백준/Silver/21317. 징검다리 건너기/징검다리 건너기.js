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
  const N = +input[0];
  const jump = input.slice(1, N).map((line) => line.split(" ").map(Number));
  const K = +input[N];

  const INF = Infinity;

  function simulate(bigJumpAt) {
    const dp = Array(N).fill(INF);
    dp[0] = 0;

    for (let i = 1; i < N; i++) {
      if (i - 1 >= 0) dp[i] = Math.min(dp[i], dp[i - 1] + jump[i - 1][0]);
      if (i - 2 >= 0) dp[i] = Math.min(dp[i], dp[i - 2] + jump[i - 2][1]);
      if (i === bigJumpAt && i - 3 >= 0) dp[i] = Math.min(dp[i], dp[i - 3] + K);
    }

    return dp[N - 1];
  }

  let answer = simulate(-1);
  for (let i = 3; i < N; i++) {
    answer = Math.min(answer, simulate(i));
  }

  console.log(answer);
}