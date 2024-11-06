const bfs = (row, col, visited, island) => {
  const dir = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];

  let queue = [];
  let sum = 0;
  queue.push([row, col, Number(island[row][col])]);
  visited[row][col] = true;

  while (queue.length > 0) {
    const [currentRow, currentCol, days] = queue.shift();
    sum += Number(days);

    for (let i = 0; i < 4; i++) {
      let nextRow = currentRow + dir[i][0];
      let nextCol = currentCol + dir[i][1];

      if (
        nextRow >= 0 &&
        nextRow < island.length &&
        nextCol >= 0 &&
        nextCol < island[currentRow].length &&
        island[nextRow][nextCol] !== "X" &&
        !visited[nextRow][nextCol]
      ) {
        queue.push([nextRow, nextCol, Number(island[nextRow][nextCol])]);
        visited[nextRow][nextCol] = true;
      }
    }
  }

  return sum;
};

function solution(maps) {
  let answer = [];
  let island = [];
  const visited = Array.from({ length: maps.length }, () =>
    Array(maps[0].length).fill(false)
  );

  maps.forEach((map) => {
    island.push(map.split(""));
  });

  for (let row = 0; row < island.length; row++) {
    for (let col = 0; col < island[row].length; col++) {
      if (island[row][col] !== "X" && !visited[row][col]) {
        answer.push(bfs(row, col, visited, island));
      }
    }
  }

  if (answer.length === 0) return [-1];

  answer.sort((a, b) => a - b);
  return answer;
}
