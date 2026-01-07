const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

// 문제 해결 로직
function solve() {
  const board = input.map((line) => line.split(" ").map(Number));

  const dir = [
    [0, 1], // 가로
    [1, 0], // 세로
    [1, 1], // 우하 대각선
    [-1, 1], // 우상 대각선
  ];

  for (let col = 0; col < 19; col++) {
    for (let row = 0; row < 19; row++) {
      if (board[row][col] === 0) continue;

      const player = board[row][col];

      for (const [dr, dc] of dir) {
        let count = 1;
        let nr = row + dr;
        let nc = col + dc;

        // 1. 앞으로 전진하며 개수 세기
        while (
          nr >= 0 &&
          nr < 19 &&
          nc >= 0 &&
          nc < 19 &&
          board[nr][nc] === player
        ) {
          count++;
          nr += dr;
          nc += dc;
        }

        if (count === 5) {
          // 2. 육목 체크 (뒤쪽 확인)
          const prevR = row - dr;
          const prevC = col - dc;
          if (
            prevR >= 0 &&
            prevR < 19 &&
            prevC >= 0 &&
            prevC < 19 &&
            board[prevR][prevC] === player
          ) {
            continue; // 6목 이상이므로 무시
          }

          // 3. 육목 체크 (앞쪽 확인은 이미 while문 종료 조건에서 처리됨)
          return `${player}\n${row + 1} ${col + 1}`;
        }
      }
    }
  }

  return 0;
}

console.log(solve());