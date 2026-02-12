const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const it = input.values();
  const N = +it.next().value;
  const likes = Array.from({ length: N * N + 1 }, () => []);
  const orders = [];
  for (let i = 0; i < N * N; i++) {
    const [person, ...like] = it.next().value.split(" ").map(Number);
    likes[person].push(...like);
    orders.push(person);
  }
  const classroom = Array.from({ length: N }, () => Array(N).fill(0));

  const nearCnt = (person, row, col) => {
    const dirs = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    let cnt = 0;
    let empty = 0;

    for (const [dr, dc] of dirs) {
      const nr = row + dr;
      const nc = col + dc;
      if (nr >= 0 && nr < N && nc >= 0 && nc < N) {
        const near = classroom[nr][nc];
        if (near === 0) {
          empty++;
        } else {
          if (likes[person].includes(near)) cnt++;
        }
      }
    }

    return { cnt, empty };
  };

  const sitPosition = (person) => {
    const positions = Array.from({ length: 5 }, () => []);

    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        if (classroom[row][col] === 0) {
          const { cnt, empty } = nearCnt(person, row, col);
          positions[cnt].push({ row, col, empty });
        }
      }
    }

    for (let i = 4; i >= 0; i--) {
      if (positions[i].length !== 0) {
        positions[i].sort(
          (a, b) => b.empty - a.empty || a.row - b.row || a.col - b.col,
        );
        return positions[i][0];
      }
    }

    return new Error();
  };

  for (const person of orders) {
    const { row, col, empty } = sitPosition(person);
    classroom[row][col] = person;
  }

  let result = 0;
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      const person = classroom[row][col];
      const { cnt, empty } = nearCnt(person, row, col);
      result += cnt === 0 ? 0 : Math.pow(10, cnt - 1);
    }
  }

  return result;
}

console.log(solve());