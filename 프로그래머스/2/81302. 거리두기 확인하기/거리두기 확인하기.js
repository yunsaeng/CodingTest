function solution(places) {
  const isNear = (row, col, place) => {
    const stack = [[row, col, 0]];
    const visited = Array.from({ length: 5 }, () => Array(5).fill(false));
    visited[row][col] = true;
    const dir = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];

    while (stack.length > 0) {
      const [r, c, md] = stack.pop();
      if (place[r][c] === "P" && (r !== row || c !== col)) return true;

      for (let i = 0; i < 4; i++) {
        const nr = r + dir[i][0];
        const nc = c + dir[i][1];

        if (md >= 2) break;

        if (
          nr >= 0 &&
          nr < 5 &&
          nc >= 0 &&
          nc < 5 &&
          !visited[nr][nc] &&
          place[nr][nc] !== "X"
        ) {
          stack.push([nr, nc, md + 1]);
          visited[nr][nc] = true;
        }
      }
    }

    return false;
  };

  const answer = places.map((place) => {
    place = place.map((p) => p.split(""));
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        if (place[row][col] === "P" && isNear(row, col, place)) return 0;
      }
    }
    return 1;
  });
  return answer;
}
