const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const [N, M] = input[0].split(" ").map(Number);
  const board = input.slice(1).map((row) => row.split(""));

  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const SR = [];
  const SB = [];
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < M; c++) {
      if (board[r][c] === "R") SR.push(r, c);

      if (board[r][c] === "B") SB.push(r, c);
    }
  }

  const slide = (position, dir) => {
    let [r, c] = position;
    const [dr, dc] = dir;
    let moveCount = 0;

    while (true) {
      if (board[r][c] === "O") break;

      const nr = r + dr;
      const nc = c + dc;

      if (board[nr][nc] === "#") break;

      r = nr;
      c = nc;
      moveCount++;
    }

    return [r, c, moveCount];
  };

  const moveTwoMarbles = (R, B, dir) => {
    let [Rr, Rc, Rd] = slide(R, dir);
    let [Br, Bc, Bd] = slide(B, dir);
    const [dr, dc] = dir;

    if (Rr === Br && Rc === Bc && board[Rr][Rc] !== "O") {
      if (Rd > Bd) {
        Rr -= dr;
        Rc -= dc;
      } else {
        Br -= dr;
        Bc -= dc;
      }
    }

    return [
      [Rr, Rc],
      [Br, Bc],
    ];
  };

  const bfs = () => {
    const queue = [[SR, SB, 0]];
    let head = 0;

    const visited = Array.from({ length: N }, () =>
      Array.from({ length: M }, () =>
        Array.from({ length: N }, () => Array(M).fill(false)),
      ),
    );
    visited[SR[0]][SR[1]][SB[0]][SB[1]] = true;

    while (head < queue.length) {
      const [R, B, cnt] = queue[head++];
      const [Rr, Rc] = R;
      const [Br, Bc] = B;

      if (board[Br][Bc] === "O") continue;

      if (board[Rr][Rc] === "O") return cnt;

      if (cnt === 10) continue;

      for (const [dr, dc] of dir) {
        const [NR, NB] = moveTwoMarbles(R, B, [dr, dc]);

        if (!visited[NR[0]][NR[1]][NB[0]][NB[1]]) {
          visited[NR[0]][NR[1]][NB[0]][NB[1]] = true;
          queue.push([NR, NB, cnt + 1]);
        }
      }
    }

    return -1;
  };

  return bfs();
}

console.log(solve());