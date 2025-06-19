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
  const [N, R, Q] = input[0].split(" ").map(Number);
  const conn = input.slice(1, N).map((line) => line.split(" ").map(Number));
  const graph = Array.from({ length: N + 1 }, () => []);

  for (const [u, v] of conn) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const dp = Array(N + 1).fill(1);
  const visited = Array(N + 1).fill(false);

  const dfs = (node) => {
    visited[node] = true;

    for (const child of graph[node]) {
      if (!visited[child]) dp[node] += dfs(child);
    }

    return dp[node];
  };

  dfs(R);

  const test = input.slice(N, N + Q).map(Number);
  for (const t of test) console.log(dp[t]);
}