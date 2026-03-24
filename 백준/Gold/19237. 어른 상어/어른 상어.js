const fs = require("fs");
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const it = input.values();
  const [N, M, k] = it.next().value.split(" ").map(Number);

  // 1. 초기 맵 상태 (숫자는 상어의 번호, 0은 빈칸)
  let grid = [];
  for (let i = 0; i < N; i++) {
    grid.push(it.next().value.split(" ").map(Number));
  }

  // 2. 상어의 현재 방향 (1~M번)
  const currentDirs = [0, ...it.next().value.split(" ").map(Number)];

  // 3. 상어의 우선순위 방향 배열
  // priorities[상어번호][현재방향] = [우선순위1, 2, 3, 4]
  const priorities = Array.from({ length: M + 1 }, () => Array(5).fill([]));
  for (let i = 1; i <= M; i++) {
    for (let j = 1; j <= 4; j++) {
      priorities[i][j] = it.next().value.split(" ").map(Number); // push 대신 직접 할당!
    }
  }

  // 4. 냄새 관리 객체 보드 (클린 코드의 핵심!)
  const smells = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => ({ sharkId: 0, expireTime: 0 })),
  );

  const dr = [0, -1, 1, 0, 0]; // 0:더미, 1:위, 2:아래, 3:왼쪽, 4:오른쪽
  const dc = [0, 0, 0, -1, 1];
  const isDead = Array(M + 1).fill(false);
  let surviveCount = M;

  // 초기 위치에 냄새 뿌리기
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (grid[r][c] > 0) {
        smells[r][c] = { sharkId: grid[r][c], expireTime: k };
      }
    }
  }

  let time = 0;

  // 메인 시뮬레이션 루프
  while (time < 1000) {
    time++;

    // 이번 턴에 상어들이 이동할 다음 위치를 기록할 임시 보드 (동시 이동 처리)
    const nextGrid = Array.from({ length: N }, () => Array(N).fill(0));

    // 각 상어별 이동 로직
    for (let i = 1; i <= M; i++) {
      if (isDead[i]) continue;

      let r = -1,
        c = -1;
      // 현재 상어 위치 찾기
      for (let row = 0; row < N; row++) {
        for (let col = 0; col < N; col++) {
          if (grid[row][col] === i) {
            r = row;
            c = col;
            break;
          }
        }
        if (r !== -1) break;
      }

      const currentDir = currentDirs[i];
      let nextR = -1,
        nextC = -1,
        nextDir = -1;

      // 우선순위 1: 냄새가 없는 빈 칸 찾기
      for (const nd of priorities[i][currentDir]) {
        const nr = r + dr[nd];
        const nc = c + dc[nd];
        if (nr >= 0 && nr < N && nc >= 0 && nc < N) {
          if (smells[nr][nc].expireTime < time) {
            // 냄새가 이미 증발했거나 없는 곳
            nextR = nr;
            nextC = nc;
            nextDir = nd;
            break;
          }
        }
      }

      // 우선순위 2: 빈 칸이 없다면 자신의 냄새가 있는 칸 찾기
      if (nextR === -1) {
        for (const nd of priorities[i][currentDir]) {
          const nr = r + dr[nd];
          const nc = c + dc[nd];
          if (nr >= 0 && nr < N && nc >= 0 && nc < N) {
            if (smells[nr][nc].sharkId === i) {
              nextR = nr;
              nextC = nc;
              nextDir = nd;
              break;
            }
          }
        }
      }

      // 5. 동시 이동 및 충돌 처리
      if (nextGrid[nextR][nextC] === 0) {
        nextGrid[nextR][nextC] = i; // 빈칸이면 내가 차지
        currentDirs[i] = nextDir; // 나의 새로운 방향 저장
      } else {
        // 이미 누군가(번호가 더 작은 강한 상어)가 있다면 나는 죽음
        isDead[i] = true;
        surviveCount--;
      }
    }

    grid = nextGrid; // 맵 갱신

    // 6. 새로운 냄새 뿌리기 (이동이 모두 끝난 후 뿌려야 시간여행 버그 방지)
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        if (grid[r][c] > 0) {
          smells[r][c] = { sharkId: grid[r][c], expireTime: time + k };
        }
      }
    }

    // 1번 상어만 남았으면 종료
    if (surviveCount === 1) return time;
  }

  return -1; // 1000초가 넘어도 안 끝나면 -1
}

console.log(solve());