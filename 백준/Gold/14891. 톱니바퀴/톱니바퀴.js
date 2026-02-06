const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  let gears = input
    .slice(0, 4)
    .map((line) => line.split("").map(Number).map(Boolean));

  const K = +input[4];
  for (let i = 0; i < K; i++) {
    const [order, dir] = input[5 + i].split(" ").map(Number);

    const newGears = gears.map((gear) => [...gear]);
    const turnGear = (order, dir) => {
      for (let i = 0; i < 8; i++) {
        newGears[order][(i + dir + 8) % 8] = gears[order][i];
      }
    };

    const visited = Array(4).fill(false);
    const dfs = (order, dir) => {
      visited[order] = true;
      turnGear(order, dir);

      const leftOrder = order - 1;
      if (
        !visited[leftOrder] &&
        leftOrder >= 0 &&
        gears[order][6] !== gears[leftOrder][2]
      )
        dfs(leftOrder, dir * -1);

      const rightOrder = order + 1;
      if (
        !visited[rightOrder] &&
        rightOrder < 4 &&
        gears[order][2] !== gears[rightOrder][6]
      )
        dfs(rightOrder, dir * -1);
    };

    dfs(order - 1, dir);
    gears = newGears;
  }

  let result = 0;
  for (let i = 0; i < 4; i++) {
    if (gears[i][0]) result += Math.pow(2, i);
  }
  return result;
}

console.log(solve());