const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

// 문제 해결 로직
function solve() {
  const it = input.values();
  const [N, K] = it.next().value.split(" ").map(Number);
  const visited = Array.from({ length: 31 }, () =>
    Array.from({ length: 31 }, () =>
      Array.from({ length: 31 }, () => new Uint8Array(451))
    )
  );

  const result = Array(N);

  const dfs = (len, a, b, k) => {
    if (len === N) return k === K;

    if (visited[len][a][b][k]) return false;
    visited[len][a][b][k] = true;

    if (dfs(len + 1, a + 1, b, k)) {
      result[len] = "A";
      return true;
    }

    if (dfs(len + 1, a, b + 1, k + a)) {
      result[len] = "B";
      return true;
    }

    if (dfs(len + 1, a, b, k + a + b)) {
      result[len] = "C";
      return true;
    }

    return false;
  };

  if (dfs(0, 0, 0, 0)) return result.join("");
  return -1;
}

console.log(solve());