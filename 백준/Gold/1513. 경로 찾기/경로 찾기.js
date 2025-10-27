const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

// 문제 해결 로직
function solve() {
  const it = input.values();
  const [N, M, C] = it.next().value.split(" ").map(Number);

  const dp = Array.from({ length: N + 1 }, () =>
    Array.from({ length: M + 1 }, () =>
      Array.from({ length: C + 1 }, () => Array(C + 1).fill(0))
    )
  );
  dp[1][1][0][0] = 1;
  const MOD = 1000007;
  const board = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));
  for (let i = 1; i <= C; i++) {
    const [x, y] = it.next().value.split(" ").map(Number);
    board[x][y] = i;
    if (x === 1 && y === 1) {
      dp[1][1][i][1] = 1;
      dp[1][1][0][0] = 0;
    }
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      if (i === 1 && j === 1) continue;

      if (board[i][j] !== 0) {
        const arcade = board[i][j];
        for (let k = 0; k < arcade; k++) {
          for (let l = 0; l <= k; l++) {
            dp[i][j][arcade][l + 1] += dp[i - 1][j][k][l] + dp[i][j - 1][k][l];
            dp[i][j][arcade][l + 1] %= MOD;
          }
        }
      } else {
        for (let k = 0; k <= C; k++) {
          for (let l = 0; l <= k; l++) {
            dp[i][j][k][l] = (dp[i - 1][j][k][l] + dp[i][j - 1][k][l]) % MOD;
          }
        }
      }
    }
  }

  const result = [];
  for (let i = 0; i <= C; i++) {
    let sum = 0;
    for (let j = 0; j <= C; j++) {
      sum += dp[N][M][j][i];
      sum %= MOD;
    }
    result.push(sum);
  }

  return result.join(" ");
}

console.log(solve());
