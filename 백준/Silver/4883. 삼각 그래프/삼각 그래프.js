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
  let idx = 0;
  let testCase = 1;

  while (input[idx] !== "0") {
    const N = +input[idx];
    const graph = input
      .slice(idx + 1, idx + 1 + N)
      .map((line) => line.split(" ").map(Number));

    const dp = Array.from({ length: N }, () => Array(3).fill(Infinity));

    // 초기값
    dp[0][1] = graph[0][1];
    dp[0][2] = dp[0][1] + graph[0][2];

    if (N >= 2) {
      dp[1][0] = dp[0][1] + graph[1][0];
      dp[1][1] = Math.min(dp[0][1], dp[0][2], dp[1][0]) + graph[1][1];
      dp[1][2] = Math.min(dp[0][1], dp[0][2], dp[1][1]) + graph[1][2];
    }

    for (let i = 2; i < N; i++) {
      dp[i][0] = Math.min(dp[i - 1][0], dp[i - 1][1]) + graph[i][0];
      dp[i][1] =
        Math.min(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2], dp[i][0]) +
        graph[i][1];
      dp[i][2] = Math.min(dp[i - 1][1], dp[i - 1][2], dp[i][1]) + graph[i][2];
    }

    console.log(`${testCase}. ${dp[N - 1][1]}`);

    idx += N + 1;
    testCase++;
  }
}