function solution(board) {
  let answer = 0;
  const start_row = board.findIndex((row) => row.includes("R"));
  const start_col = board[start_row].indexOf("R");
  const dir = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const visited = Array.from({ length: board.length }, () =>
    Array(board[0].length).fill(false)
  );
  visited[start_row][start_col] = true;

  let BFS_queue = [[start_row, start_col, 0]];

  while (BFS_queue.length > 0) {
    const [row, col, count] = BFS_queue.shift();

    if (board[row][col] === "G") return count;

    for (const [dirRow, dirCol] of dir) {
      let posRow = row;
      let posCol = col;

      while (
        posRow + dirRow >= 0 &&
        posRow + dirRow < board.length &&
        posCol + dirCol >= 0 &&
        posCol + dirCol < board[0].length &&
        board[posRow + dirRow][posCol + dirCol] !== "D"
      ) {
        posRow += dirRow;
        posCol += dirCol;
      }

      if (!visited[posRow][posCol]) {
        visited[posRow][posCol] = true;
        BFS_queue.push([posRow, posCol, count + 1]);
      }
    }
  }

  return -1;
}
