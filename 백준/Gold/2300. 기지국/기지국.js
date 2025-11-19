const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

// 문제 해결 로직
function solve() {
  const it = input.values();
  const N = +it.next().value;
  const buildings = [];
  for (let i = 0; i < N; i++) {
    const [x, y] = it.next().value.split(" ").map(Number);
    buildings.push([x, y]);
  }

  buildings.sort((a, b) => a[0] - b[0]);
  const dp = Array(N + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= N; i++) {
    const [x, y] = buildings[i - 1];
    const temp = Math.abs(y) * 2;
    let maxY = 0;

    for (let j = i; j >= 1; j--) {
      const [prevX, prevY] = buildings[j - 1];
      maxY = Math.max(maxY, Math.abs(prevY));
      const diffX = x - prevX;
      const cost = Math.max(maxY * 2, diffX);

      dp[i] = Math.min(dp[i], dp[j - 1] + cost);
    }
  }

  return dp[N];
}

console.log(solve());