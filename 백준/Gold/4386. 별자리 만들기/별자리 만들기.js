const fs = require("fs");
const { get } = require("http");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const n = +input[0];
  const starPositions = input
    .slice(1)
    .map((position) => position.split(" ").map(parseFloat));

  const getDist = (idx1, idx2) => {
    const [x1, y1] = starPositions[idx1];
    const [x2, y2] = starPositions[idx2];
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  };

  const edges = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      edges.push([i, j, getDist(i, j)]);
    }
  }
  edges.sort((a, b) => a[2] - b[2]);

  const parent = Array.from({ length: n }, (_, i) => i);

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
  for (const [x, y, dist] of edges) {
    if (!findParent(x, y)) {
      union(x, y);
      result += dist;
    }
  }

  return result.toFixed(2);
}

console.log(solve());