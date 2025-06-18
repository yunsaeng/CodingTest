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
  const edges = input.slice(1).map((line) => line.split(" ").map(Number));
  const graph = Array.from({ length: N + 1 }, () => []);

  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const dp = Array.from({ length: N + 1 }, () => [0, 0]);
  const visited = Array(N + 1).fill(false);

  const dfs = (node) => {
    visited[node] = true;
    dp[node][0] = 0; // node가 얼리어답터가 아닐 때
    dp[node][1] = 1; // node가 얼리어답터일 때 (자기 자신 포함)

    for (const child of graph[node]) {
      if (visited[child]) continue;

      dfs(child);
      dp[node][0] += dp[child][1]; // 내가 얼리어답터 아니면 자식은 무조건 얼리어답터
      dp[node][1] += Math.min(dp[child][0], dp[child][1]); // 내가 얼리어답터면 자식은 아무거나
    }
  };

  dfs(1);
  console.log(Math.min(dp[1][0], dp[1][1]));
}