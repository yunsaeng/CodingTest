const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const [R, C, M] = input[0].split(" ").map(Number);
  if (M === 0) return 0;

  let sharks = input.slice(1).map((line) => line.split(" ").map(Number));

  let fishingSpot = Array.from({ length: R + 1 }, () => Array(C + 1).fill(0));
  sharks.forEach(([r, c, s, d, z]) => (fishingSpot[r][c] = z));

  const dr = [0, -1, 1, 0, 0];
  const dc = [0, 0, 0, 1, -1];

  const getRC = (r, c, s, d) => {
    let moveCount = 0;
    if (d === 1 || d === 2) moveCount = s % ((R - 1) * 2);
    else moveCount = s % ((C - 1) * 2);

    for (let i = 0; i < moveCount; i++) {
      if (r === 1 && d === 1) d = 2;
      else if (r === R && d === 2) d = 1;
      else if (c === C && d === 3) d = 4;
      else if (c === 1 && d === 4) d = 3;

      r += dr[d];
      c += dc[d];
    }

    return [r, c, d];
  };

  let cur = 0;
  let result = 0;
  while (true) {
    cur++;
    if (cur > C) break;

    for (let r = 1; r <= R; r++) {
      if (fishingSpot[r][cur] !== 0) {
        result += fishingSpot[r][cur];
        fishingSpot[r][cur] = 0;
        break;
      }
    }

    const newSharks = [];

    const queue = [...sharks];
    let head = 0;

    const newFishingSpot = Array.from({ length: R + 1 }, () =>
      Array(C + 1).fill(0),
    );

    while (head < queue.length) {
      const [r, c, s, d, z] = queue[head++];

      if (fishingSpot[r][c] !== z) continue;

      const [nr, nc, nd] = getRC(r, c, s, d);
      newSharks.push([nr, nc, s, nd, z]);
      newFishingSpot[nr][nc] = Math.max(newFishingSpot[nr][nc], z);
    }

    sharks = newSharks;
    fishingSpot = newFishingSpot;
  }

  return result;
}

console.log(solve());