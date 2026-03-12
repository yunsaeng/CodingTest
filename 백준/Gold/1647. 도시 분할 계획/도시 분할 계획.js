const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const [N, M] = input[0].split(" ").map(Number);
  const edges = input.slice(1).map((edge) => edge.split(" ").map(Number));
  edges.sort((a, b) => a[2] - b[2]);

  const parent = Array.from({ length: N + 1 }, (_, i) => i);

  const getParent = (x) => {
    if (parent[x] === x) return x;
    return (parent[x] = getParent(parent[x]));
  };

  const union = (x, y) => {
    const px = getParent(x);
    const py = getParent(y);
    if (px < py) parent[py] = px;
    else parent[px] = py;
  };

  const findParent = (x, y) => getParent(x) === getParent(y);

  let result = 0;
  let maxCost = -Infinity;
  for (const [u, v, cost] of edges) {
    if (!findParent(u, v)) {
      union(u, v);
      result += cost;
      maxCost = Math.max(maxCost, cost);
    }
  }

  return result - maxCost;
}

console.log(solve());