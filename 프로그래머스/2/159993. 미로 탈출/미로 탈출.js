function bfs(maps, start, goal) {
  const dirX = [0, 1, 0, -1];
  const dirY = [-1, 0, 1, 0];
  const queue = [[...start, 0]]; // [row, col, distance]
  const visited = Array.from({ length: maps.length }, () =>
    Array(maps[0].length).fill(false)
  );

  visited[start[0]][start[1]] = true;

  while (queue.length > 0) {
    const [currentRow, currentCol, distance] = queue.shift();

    if (currentRow === goal[0] && currentCol === goal[1]) {
      return distance;
    }

    for (let i = 0; i < 4; i++) {
      const nextRow = currentRow + dirX[i];
      const nextCol = currentCol + dirY[i];

      if (
        nextRow >= 0 &&
        nextRow < maps.length &&
        nextCol >= 0 &&
        nextCol < maps[0].length &&
        !visited[nextRow][nextCol] &&
        maps[nextRow][nextCol] !== "X"
      ) {
        visited[nextRow][nextCol] = true;
        queue.push([nextRow, nextCol, distance + 1]);
      }
    }
  }

  return -1;
}

function solution(maps) {
  let start, lever, exit;

  for (let row = 0; row < maps.length; row++) {
    for (let col = 0; col < maps[0].length; col++) {
      if (maps[row][col] === "S") start = [row, col];
      if (maps[row][col] === "L") lever = [row, col];
      if (maps[row][col] === "E") exit = [row, col];
    }
  }

  const distanceToLever = bfs(maps, start, lever);
  if (distanceToLever === -1) return -1;

  const distanceToExit = bfs(maps, lever, exit);
  if (distanceToExit === -1) return -1;

  return distanceToLever + distanceToExit;
}
