function solution(grid) {
  const answer = [];
  const row = grid.length;
  const col = grid[0].length;
  // up: 0, right: 1, down: 2, left: 3
  const visited = Array.from({ length: row }, () =>
    Array.from({ length: col }, () => Array(4).fill(false))
  );

  const dir_row = [-1, 0, 1, 0];
  const dir_col = [0, 1, 0, -1];

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      for (let d = 0; d < 4; d++) {
        if (visited[r][c][d]) continue; // 이미 방문한 경로라면 패스

        let cycleLength = 0;
        let curRow = r;
        let curCol = c;
        let curDir = d;

        while (!visited[curRow][curCol][curDir]) {
          visited[curRow][curCol][curDir] = true;
          cycleLength++;

          // 다음 위치 계산
          let nextRow = (curRow + dir_row[curDir] + row) % row;
          let nextCol = (curCol + dir_col[curDir] + col) % col;

          // 방향 결정
          if (grid[nextRow][nextCol] === "S") {
            curDir = curDir;
          } else if (grid[nextRow][nextCol] === "L") {
            curDir = (curDir + 3) % 4;
          } else if (grid[nextRow][nextCol] === "R") {
            curDir = (curDir + 1) % 4;
          }

          curRow = nextRow;
          curCol = nextCol;
        }

        answer.push(cycleLength);
      }
    }
  }

  return answer.sort((a, b) => a - b); // 문제 조건에 따라 정렬
}
