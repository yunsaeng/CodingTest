const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

// 문제 해결 로직
function solve() {
  const it = input.values();
  const N = +it.next().value;

  let cur = it.next();
  const coordinates = [];
  for (let i = 0; i < N; i++) {
    const [x, y] = cur.value.split(" ").map(Number);
    coordinates.push([x, y]);
    cur = it.next();
  }

  const distances = Array.from({ length: N }, (_, i) => {
    return Array.from({ length: N }, (_, j) => {
      return Math.hypot(
        coordinates[i][0] - coordinates[j][0],
        coordinates[i][1] - coordinates[j][1]
      );
    });
  });

  const dp = Array.from({ length: N }, () => Array(1 << N).fill(Infinity));
  const dfs = (current, visited) => {
    if (visited === (1 << N) - 1) return distances[current][0];

    if (dp[current][visited] !== Infinity) return dp[current][visited];

    for (let next = 0; next < N; next++) {
      if (visited & (1 << next)) continue;

      dp[current][visited] = Math.min(
        dp[current][visited],
        dfs(next, visited | (1 << next)) + distances[current][next]
      );
    }

    return dp[current][visited];
  };

  return dfs(0, 1);
}
// 결과 출력
console.log(solve());
