const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const N = +input[0];
  const initialBoard = input
    .slice(1)
    .map((line) => line.split(" ").map(Number));

  // 보드를 시계 방향으로 90도 회전
  const rotate = (board) => {
    const newBoard = Array.from({ length: N }, () => Array(N).fill(0));
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        newBoard[j][N - 1 - i] = board[i][j];
      }
    }
    return newBoard;
  };

  // 보드를 무조건 '왼쪽'으로 밉니다.
  const slideLeft = (board) => {
    const newBoard = [];
    for (let i = 0; i < N; i++) {
      let row = board[i].filter((val) => val !== 0);
      for (let j = 0; j < row.length - 1; j++) {
        if (row[j] === row[j + 1]) {
          row[j] *= 2;
          row[j + 1] = 0;
        }
      }
      row = row.filter((val) => val !== 0);
      while (row.length < N) row.push(0);
      newBoard.push(row);
    }
    return newBoard;
  };

  let result = -Infinity;

  const dfs = (currentBoard, times) => {
    // ⚠️ 수정 포인트: 탐색 중인 현재 보드(currentBoard)에서 최댓값을 찾아야 합니다!
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        result = Math.max(result, currentBoard[i][j]);
      }
    }

    if (times === 5) return;

    // 4방향 탐색을 하드코딩 대신 "회전"으로 처리!
    let rotatedBoard = currentBoard;
    for (let i = 0; i < 4; i++) {
      rotatedBoard = rotate(rotatedBoard); // 90도 돌리고
      const nextBoard = slideLeft(rotatedBoard); // 왼쪽으로 밀기!

      dfs(nextBoard, times + 1);
    }
  };

  dfs(initialBoard, 0);
  return result;
}

console.log(solve());