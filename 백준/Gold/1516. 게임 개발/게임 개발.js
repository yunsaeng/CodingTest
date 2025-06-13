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
  const time = [0];
  const build = [[0]];

  for (let i = 1; i <= N; i++) {
    const line = input[i].split(" ").map(Number);
    time.push(line[0]);
    build.push(line.slice(1, line.length - 1) || []);
  }

  const dp = Array(N + 1).fill(0);

  const dfs = (i) => {
    if (dp[i]) return dp[i];

    if (build[i].length === 0) {
      dp[i] = time[i];
      return dp[i];
    }

    for (const prev of build[i]) {
      dp[i] = Math.max(dp[i], dfs(prev) + time[i]);
    }

    return dp[i];
  };

  for (let i = 1; i <= N; i++) {
    dfs(i);
  }

  for (let i = 1; i <= N; i++) {
    console.log(dp[i]);
  }
}