const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const board = input.map((row) => row.split(" ").map(Number));
  const rowVisited = Array.from({ length: 9 }, () => Array(10).fill(false));
  const colVisited = Array.from({ length: 9 }, () => Array(10).fill(false));
  const areaVisited = Array.from({ length: 3 }, () =>
    Array.from({ length: 3 }, () => Array(10).fill(0)),
  );

  const empty = [];
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const cur = board[r][c];
      if (cur === 0) empty.push([r, c]);
      else {
        rowVisited[r][cur] = true;
        colVisited[c][cur] = true;

        const ar = Math.floor(r / 3);
        const ac = Math.floor(c / 3);
        areaVisited[ar][ac][cur] = true;
      }
    }
  }

  const dfs = (idx) => {
    if (idx === empty.length) return true;

    const [r, c] = empty[idx];
    const ar = Math.floor(r / 3);
    const ac = Math.floor(c / 3);
    for (let num = 1; num <= 9; num++) {
      if (
        !rowVisited[r][num] &&
        !colVisited[c][num] &&
        !areaVisited[ar][ac][num]
      ) {
        rowVisited[r][num] = true;
        colVisited[c][num] = true;
        areaVisited[ar][ac][num] = true;
        board[r][c] = num;

        if(dfs(idx + 1)) return true;

        rowVisited[r][num] = false;
        colVisited[c][num] = false;
        areaVisited[ar][ac][num] = false;
        board[r][c] = 0;
      }
    }

    return false;
  };

  dfs(0);

  return board.map((row) => row.join(" ")).join("\n");
}

console.log(solve());