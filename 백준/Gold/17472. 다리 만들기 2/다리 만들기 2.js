const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const [N, M] = input[0].split(" ").map(Number);
  const board = input.slice(1).map((row) => row.split(" ").map(Number));
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let islandCount = 0;
  let islandId = 2;

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < M; c++) {
      if (board[r][c] === 1) {
        islandCount++;

        const queue = [[r, c]];
        let head = 0;

        board[r][c] = islandId;

        while (head < queue.length) {
          const [cr, cc] = queue[head++];

          for (const [dr, dc] of dir) {
            const nr = cr + dr;
            const nc = cc + dc;

            if (nr >= 0 && nr < N && nc >= 0 && nc < M && board[nr][nc] === 1) {
              board[nr][nc] = islandId;
              queue.push([nr, nc]);
            }
          }
        }

        islandId++;
      }
    }
  }

  const edges = [];

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < M; c++) {
      if (board[r][c] > 1) {
        const startIsland = board[r][c];

        for (const [dr, dc] of dir) {
          let nr = r;
          let nc = c;
          let dist = 0;

          while (true) {
            nr += dr;
            nc += dc;

            if (nr < 0 || nr >= N || nc < 0 || nc >= M) break;
            if (board[nr][nc] === startIsland) break;

            if (board[nr][nc] > 1) {
              if (dist >= 2) {
                edges.push([dist, startIsland, board[nr][nc]]);
              }
              break;
            }

            dist++;
          }
        }
      }
    }
  }

  edges.sort((a, b) => a[0] - b[0]);

  const parent = Array.from({ length: islandId }, (_, i) => i);

  const getParent = (x) => {
    // 부모 노드 없이 본인이 최상위 노드일때 본인 return
    if (parent[x] === x) return x;
    // 본인의 부모가 있을 때 부모의 최상위 노드를 할당
    return (parent[x] = getParent(parent[x]));
  };

  // 하나의 노드 혹은 둘 이상의 노드를 연결하기 위한 작업 (정렬 기준은 숫자가 작은것이 더 상위 노드)
  const unionParent = (a, b) => {
    const rootA = getParent(a);
    const rootB = getParent(b);
    if (rootA < rootB) parent[rootB] = rootA;
    else parent[rootA] = rootB;
  };

  // a, b 두개의 최상위 부모가 같은지 다른지 확인
  const findParent = (a, b) => {
    return getParent(a) === getParent(b);
  };

  let totalCost = 0;
  let connectEdges = 0;

  for (const [dist, s, e] of edges) {
    if (!findParent(s, e)) {
      unionParent(s, e);
      totalCost += dist;
      connectEdges++;
    }
  }

  if (connectEdges === islandCount - 1) return totalCost;
  else return -1;
}

console.log(solve());