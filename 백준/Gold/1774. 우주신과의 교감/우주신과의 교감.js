const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const [N, M] = input[0].split(" ").map(Number);
  const coordinates = input
    .slice(1, N + 1)
    .map((line) => line.split(" ").map(Number));

  const connections = input
    .slice(N + 1)
    .map((line) => line.split(" ").map((e) => Number(e) - 1));

  const getDistance = (idx1, idx2) => {
    const [x1, y1] = coordinates[idx1];
    const [x2, y2] = coordinates[idx2];
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  };

  const edges = [];
  for (let i = 0; i < coordinates.length; i++) {
    for (let j = i + 1; j < coordinates.length; j++) {
      edges.push([i, j, getDistance(i, j)]);
    }
  }
  edges.sort((a, b) => a[2] - b[2]);

  const parent = Array.from({ length: N }, (_, i) => i);

  const getParent = (x) => {
    if (parent[x] === x) return x;
    return (parent[x] = getParent(parent[x]));
  };

  const unionParent = (a, b) => {
    rootA = getParent(a);
    rootB = getParent(b);
    if (rootA < rootB) parent[rootB] = rootA;
    else parent[rootA] = rootB;
  };

  const findParent = (a, b) => getParent(a) === getParent(b);

  connections.forEach(([a, b]) => {
    unionParent(a, b);
  });

  let result = 0;
  edges.forEach(([a, b, cost]) => {
    if (!findParent(a, b)) {
      unionParent(a, b);
      result += cost;
    }
  });

  return result.toFixed(2);
}

console.log(solve());