const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

// 문제 해결 로직
function solve() {
  const it = input.values();
  const [N, R, G, B] = it.next().value.split(" ").map(Number);

  const fact = new Array(N + 2).fill(1n);
  for (let i = 2; i <= N + 1; i++) {
    fact[i] = fact[i - 1] * BigInt(i);
  }

  const dp = Array.from({ length: N + 1 }, () =>
    Array.from({ length: R + 1 }, () =>
      Array.from({ length: G + 1 }, () => Array(B + 1).fill(-1n))
    )
  );

  const dfs = (lv, r, g, b) => {
    if (lv === N) {
      if (r <= R && g <= G && b <= B) return 1n;
      else return 0n;
    }

    if (r > R || g > G || b > B) return 0n;

    if (dp[lv][r][g][b] !== -1n) return dp[lv][r][g][b];

    let result = 0n;
    const need = lv + 1;

    result += dfs(need, r + need, g, b);
    result += dfs(need, r, g + need, b);
    result += dfs(need, r, g, b + need);

    if (need % 2 === 0) {
      const half = need / 2;
      const temp = fact[need] / (fact[half] * fact[half]);

      result += temp * dfs(need, r + half, g + half, b);
      result += temp * dfs(need, r, g + half, b + half);
      result += temp * dfs(need, r + half, g, b + half);
    }

    if (need % 3 === 0) {
      const third = need / 3;
      const temp = fact[need] / (fact[third] * fact[third] * fact[third]);

      result += temp * dfs(need, r + third, g + third, b + third);
    }

    return (dp[lv][r][g][b] = result);
  };

  return dfs(0, 0, 0, 0).toString();
}

console.log(solve());