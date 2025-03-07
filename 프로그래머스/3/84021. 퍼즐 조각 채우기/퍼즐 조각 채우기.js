function solution(game_board, table) {
  const SIZE = game_board.length;
  const visitedBoard = Array.from({ length: SIZE }, () =>
    Array(SIZE).fill(false)
  );
  const visitedTable = Array.from({ length: SIZE }, () =>
    Array(SIZE).fill(false)
  );

  const bfs = (row, col, board, visited, target) => {
    const queue = [[row, col]];
    const dRow = [-1, 0, 1, 0];
    const dCol = [0, 1, 0, -1];
    const block = [];

    while (queue.length) {
      const [r, c] = queue.shift();
      block.push([r, c]);

      for (let i = 0; i < 4; i++) {
        const nr = r + dRow[i];
        const nc = c + dCol[i];
        if (
          nr >= 0 &&
          nr < SIZE &&
          nc >= 0 &&
          nc < SIZE &&
          !visited[nr][nc] &&
          board[nr][nc] === target
        ) {
          visited[nr][nc] = true;
          queue.push([nr, nc]);
        }
      }
    }

    return block;
  };

  const nomalize = (block) => {
    const minRow = Math.min(...block.map((e) => e[0]));
    const minCol = Math.min(...block.map((e) => e[1]));
    return block.map(([row, col]) => [row - minRow, col - minCol]).sort();
  };

  const rotate = (block) => {
    const maxRow = Math.max(...block.map((e) => e[0]));
    return block.map(([row, col]) => [col, maxRow - row]).sort();
  };

  const boardSpaces = [];
  const tableBlocks = [];

  for (let row = 0; row < SIZE; row++) {
    for (let col = 0; col < SIZE; col++) {
      if (!visitedBoard[row][col] && game_board[row][col] === 0) {
        visitedBoard[row][col] = true;
        boardSpaces.push(nomalize(bfs(row, col, game_board, visitedBoard, 0)));
      }
      if (!visitedTable[row][col] && table[row][col] === 1) {
        visitedTable[row][col] = true;
        tableBlocks.push(nomalize(bfs(row, col, table, visitedTable, 1)));
      }
    }
  }

  let answer = 0;

  for (let block of tableBlocks) {
    let match = false;
    for (let i = 0; i < boardSpaces.length; i++) {
      const space = boardSpaces[i];
      for (let spin = 0; spin < 4; spin++) {
        if (JSON.stringify(space) === JSON.stringify(block)) {
          answer += block.length;
          boardSpaces.splice(i, 1);
          match = true;
          break;
        }
        block = rotate(block);
      }
      if (match) break;
    }
  }

  return answer;
}