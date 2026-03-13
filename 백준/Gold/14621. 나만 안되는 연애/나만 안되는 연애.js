const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const [N, M] = input[0].split(" ").map(Number);
  const gender = input[1].split(" ");
  const isMan = Array(N + 1).fill(false);
  for (let i = 0; i < N; i++) {
    if (gender[i] === "M") isMan[i + 1] = true;
  }

  const edges = input
    .slice(2)
    .map((line) => line.split(" ").map(Number))
    .filter(([u, v, d]) => (isMan[u] && !isMan[v]) || (!isMan[u] && isMan[v]))
    .sort((a, b) => a[2] - b[2]);

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

  const findParent = (a, b) => getParent(a) === getParent(b);

  let result = 0;
  let edgeCount = 0;

  for (const [u, v, d] of edges) {
    if (!findParent(u, v)) {
      unionParent(u, v);
      result += d;
      edgeCount++;
    }
  }

  return edgeCount === N - 1 ? result : -1;
}

console.log(solve());