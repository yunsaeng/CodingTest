const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const [N, M] = input[0].split(" ").map(Number);
  const board = input.slice(1).map((row) => row.split(" ").map(Number));

  const cctv = [];
  const watching = Array.from({ length: N }, () => Array(M).fill(0));
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < M; c++) {
      if (board[r][c] !== 0) {
        watching[r][c]++;
        if (board[r][c] !== 6) {
          cctv.push([r, c, board[r][c]]);
        }
      }
    }
  }

  const cctvDir = [
    [],
    [[[0, 1]], [[0, -1]], [[1, 0]], [[-1, 0]]],
    [
      [
        [0, 1],
        [0, -1],
      ],
      [
        [1, 0],
        [-1, 0],
      ],
    ],
    [
      [
        [0, 1],
        [1, 0],
      ],
      [
        [1, 0],
        [0, -1],
      ],
      [
        [0, -1],
        [-1, 0],
      ],
      [
        [-1, 0],
        [0, 1],
      ],
    ],
    [
      [
        [0, 1],
        [1, 0],
        [0, -1],
      ],
      [
        [1, 0],
        [0, -1],
        [-1, 0],
      ],
      [
        [0, -1],
        [-1, 0],
        [0, 1],
      ],
      [
        [-1, 0],
        [0, 1],
        [1, 0],
      ],
    ],
    [
      [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
      ],
    ],
  ];

  const getBlindSpot = () => {
    let blindSpot = 0;

    for (let r = 0; r < N; r++) {
      for (let c = 0; c < M; c++) {
        if (watching[r][c] === 0) {
          blindSpot++;
        }
      }
    }

    return blindSpot;
  };

  const watch = (cctvRow, cctvCol, dir, isWatch) => {
    for (const [dr, dc] of dir) {
      let curRow = cctvRow;
      let curCol = cctvCol;

      while (true) {
        const nr = curRow + dr;
        const nc = curCol + dc;

        if (nr < 0 || nr >= N || nc < 0 || nc >= M || board[nr][nc] === 6)
          break;

        if (isWatch) watching[nr][nc]++;
        else watching[nr][nc]--;

        curRow = nr;
        curCol = nc;
      }
    }
  };

  let result = Infinity;
  const dfs = (cnt) => {
    if (cnt === cctv.length) {
      const blindSpot = getBlindSpot();
      result = Math.min(result, blindSpot);
      return;
    }

    const [r, c, num] = cctv[cnt];

    for (const dir of cctvDir[num]) {
      watch(r, c, dir, true);
      dfs(cnt + 1);
      watch(r, c, dir, false);
    }
  };

  dfs(0);

  return result;
}

console.log(solve());