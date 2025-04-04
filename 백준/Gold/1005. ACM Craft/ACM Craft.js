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
  const T = +input[idx++];

  for (let c = 0; c < T; c++) {
    const [N, K] = input[idx++].split(" ").map(Number);
    const buildTimes = [0, ...input[idx++].split(" ").map(Number)];
    const buildGraph = Array.from({ length: N + 1 }, () => []);
    const indegree = Array(N + 1).fill(0);
    const dp = [...buildTimes];

    for (let i = 0; i < K; i++) {
      const [prev, next] = input[idx++].split(" ").map(Number);
      buildGraph[prev].push(next);
      indegree[next]++;
    }

    const goalBuilding = +input[idx++];
    bfs(buildTimes, buildGraph, indegree, dp);
    console.log(dp[goalBuilding]);
  }
}

function bfs(buildTimes, buildGraph, indegree, dp) {
  const queue = [];
  let front = 0;

  for (let i = 1; i < indegree.length; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  while (front < queue.length) {
    const prev = queue[front++];
    for (const next of buildGraph[prev]) {
      dp[next] = Math.max(dp[next], dp[prev] + buildTimes[next]);
      if (--indegree[next] === 0) {
        queue.push(next);
      }
    }
  }
}