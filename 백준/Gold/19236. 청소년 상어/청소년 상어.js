const fs = require("fs");
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const initialBoard = input.map((line) => {
    const temp = line.split(" ").map(Number);
    return Array.from({ length: 4 }, (_, i) => [
      temp[i * 2],
      temp[i * 2 + 1] - 1,
    ]);
  });

  // 12시부터 반시계 방향 (0~7)
  const dr = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dc = [0, -1, -1, -1, 0, 1, 1, 1];

  // ✨ 1. 보드 깊은 복사 함수 (백트래킹의 핵심)
  const copyBoard = (board) => board.map((row) => row.map((cell) => [...cell]));

  // ✨ 2. 물고기 이동 함수 (상어의 위치를 인자로 받아 상어만 피함)
  const moveFishes = (board, sharkR, sharkC) => {
    for (let i = 1; i <= 16; i++) {
      let r = -1,
        c = -1;

      // i번 물고기 찾기 (매번 찾는 것이 temp 배열 관리보다 실수가 없고 안전함)
      for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
          if (board[row][col][0] === i) {
            r = row;
            c = col;
            break;
          }
        }
        if (r !== -1) break;
      }

      // ✨ 죽은 물고기면(찾지 못했으면) 패스
      if (r === -1) continue;

      let [size, d] = board[r][c];

      // 8방향 탐색
      for (let cnt = 0; cnt < 8; cnt++) {
        const nd = (d + cnt) % 8; // 45도씩 반시계 회전
        const nr = r + dr[nd];
        const nc = c + dc[nd];

        // 맵 안쪽이고, 상어가 있는 위치가 아니면 이동 가능! (빈칸이든 다른 물고기든 상관없이 스왑)
        if (
          nr >= 0 &&
          nr < 4 &&
          nc >= 0 &&
          nc < 4 &&
          !(nr === sharkR && nc === sharkC)
        ) {
          board[r][c][1] = nd; // ✨ 4. 이동하기 전, 나의 방향을 갱신!

          // 위치 스왑 (구조 분해 할당 활용)
          [board[r][c], board[nr][nc]] = [board[nr][nc], board[r][c]];
          break; // 이동 완료했으므로 다음 물고기로
        }
      }
    }
  };

  let maxScore = 0;

  // ✨ DFS 인자: 현재 보드, 상어위치(r, c), 현재까지 먹은 양
  const dfs = (board, sharkR, sharkC, score) => {
    // 1. 상어가 해당 칸의 물고기를 먹음
    const fishSize = board[sharkR][sharkC][0];
    const sharkDir = board[sharkR][sharkC][1];
    const currentScore = score + fishSize;

    // 최댓값 갱신
    maxScore = Math.max(maxScore, currentScore);

    // 2. 상태를 복사하고 먹힌 물고기를 빈칸(0)으로 만듦
    const nextBoard = copyBoard(board);
    nextBoard[sharkR][sharkC][0] = 0; // 0은 빈칸을 의미함

    // 3. 물고기들 대이동 (복사된 보드에서 진행)
    moveFishes(nextBoard, sharkR, sharkC);

    // 4. 상어의 다음 이동 탐색 (최대 3칸까지 점프 가능)
    for (let step = 1; step <= 3; step++) {
      const nr = sharkR + dr[sharkDir] * step;
      const nc = sharkC + dc[sharkDir] * step;

      // 맵 범위 안이고
      if (nr >= 0 && nr < 4 && nc >= 0 && nc < 4) {
        // 물고기가 있는 칸(0보다 큼)으로만 점프 가능
        if (nextBoard[nr][nc][0] > 0) {
          dfs(nextBoard, nr, nc, currentScore); // 재귀 호출 (백트래킹)
        }
      }
    }
  };

  // 0,0 위치에서 시작
  dfs(initialBoard, 0, 0, 0);

  return maxScore;
}

console.log(solve());