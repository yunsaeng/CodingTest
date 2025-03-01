function solution(storage, requests) {
  storage = storage.map((s) => s.split(""));

  // BFS를 사용하여 외각인지 확인하는 함수
  const isOutside = (row, col) => {
    const queue = [[row, col]];
    const visited = new Set();
    visited.add(`${row},${col}`);

    while (queue.length) {
      const [r, c] = queue.shift();

      // 만약 (r, c)가 외각에 도달하면 true 반환
      if (
        r === 0 ||
        r === storage.length - 1 ||
        c === 0 ||
        c === storage[0].length - 1
      ) {
        return true;
      }

      const dir = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
      ];
      for (let [dr, dc] of dir) {
        const [nr, nc] = [r + dr, c + dc];

        if (
          nr >= 0 &&
          nr < storage.length &&
          nc >= 0 &&
          nc < storage[0].length &&
          !visited.has(`${nr},${nc}`)
        ) {
          if (storage[nr][nc] !== "") continue; // 빈 칸이 아니면 탐색X
          queue.push([nr, nc]);
          visited.add(`${nr},${nc}`);
        }
      }
    }
    return false;
  };

  requests.forEach((request) => {
    if (request.length === 1) {
      const temp = storage.map((s) => [...s]);
      for (let row = 0; row < storage.length; row++) {
        for (let col = 0; col < storage[0].length; col++) {
          if (storage[row][col] === request && isOutside(row, col)) {
            temp[row][col] = "";
          }
        }
      }
      storage = temp;
    } else {
      for (let row = 0; row < storage.length; row++) {
        for (let col = 0; col < storage[0].length; col++) {
          if (storage[row][col] === request[0]) {
            storage[row][col] = "";
          }
        }
      }
    }
  });

  return storage.reduce(
    (total, row) =>
      total + row.reduce((acc, cur) => (cur !== "" ? acc + 1 : acc), 0),
    0
  );
}
