const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

// 문제 해결 로직
function solve() {
  const it = input.values();
  const T = it.next().value;

  const result = [];
  for (let tc = 1; tc <= T; tc++) {
    const [N, M] = it.next().value.split(" ").map(Number);

    const graph = Array.from({ length: N + 1 }, () => []);
    for (let i = 0; i < M; i++) {
      const [u, v, e] = it.next().value.split(" ").map(Number);
      graph[u].push([v, e]);
      graph[v].push([u, e]);
    }

    const dp = Array(N + 1).fill(-1);
    const visited = Array(N + 1).fill(false);

    const dfs = (node) => {
      if (graph[node].length === 1 && node !== 1) return (dp[node] = Infinity);

      if (dp[node] !== -1) return dp[node];

      visited[node] = true;
      let cost = 0;
      for (const next of graph[node]) {
        const [v, e] = next;
        if (visited[v]) continue;

        cost += Math.min(e, dfs(v));
      }

      return (dp[node] = cost);
    };

    result.push(dfs(1));
  }

  return result.join("\n");
}

console.log(solve());
