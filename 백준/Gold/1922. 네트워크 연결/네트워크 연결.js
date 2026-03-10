const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const N = +input[0];
  const M = +input[1];
  const edges = input.slice(2).map((edge) => edge.split(" ").map(Number));
  edges.sort((a, b) => a[2] - b[2]);

  const parent = Array.from({ length: N + 1 }, (_, i) => i);

  const getParent = (x) => {
    if (parent[x] === x) return x;
    return (parent[x] = getParent(parent[x]));
  };

  const unionParent = (a, b) => {
    const rootA = getParent(a);
    const rootB = getParent(b);
    if (rootA < rootB) parent[rootB] = rootA;
    else parent[rootA] = rootB;
  };

  const findParent = (a, b) => {
    return getParent(a) === getParent(b);
  };

  let totalCost = 0;

  for (const [a, b, cost] of edges) {
    if (!findParent(a, b)) {
      unionParent(a, b);
      totalCost += cost;
    }
  }

  return totalCost;
}

console.log(solve());