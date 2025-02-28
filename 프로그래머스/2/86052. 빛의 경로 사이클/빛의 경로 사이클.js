function solution(grid) {
  const answer = [];
  const row = grid.length;
  const col = grid[0].length;
  const visited = Array.from({ length: row }, () =>
    Array.from({ length: col }, () => Array(4).fill(false))
  );
  // up: 0, right: 1, down: 2, left: 3
  const dir_row = [-1, 0, 1, 0];
  const dir_col = [0, 1, 0, -1];

  for (let c_row = 0; c_row < row; c_row++) {
    for (let c_col = 0; c_col < col; c_col++) {
      for (let dir = 0; dir < 4; dir++) {
        if (visited[c_row][c_col][dir]) continue;
        const stack = [];
        stack.push([c_row, c_col, dir]);
        visited[c_row][c_col][dir] = true;
        while (1) {
          const [r, c, d] = stack.at(-1);
          const n_row = (r + dir_row[d] + row) % row;
          const n_col = (c + dir_col[d] + col) % col;
          let n_d;
          if (grid[n_row][n_col] === "S") n_d = d;
          else if (grid[n_row][n_col] === "L") n_d = (d + 3) % 4;
          else if (grid[n_row][n_col] === "R") n_d = (d + 1) % 4;
          if (visited[n_row][n_col][n_d]) break;
          visited[n_row][n_col][n_d] = true;
          stack.push([n_row, n_col, n_d]);
        }
        answer.push(stack.length);
      }
    }
  }

  return answer.sort((a, b) => a - b);
}
