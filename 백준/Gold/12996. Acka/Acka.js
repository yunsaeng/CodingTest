const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

// 문제 해결 로직
function solve() {
  const it = input.values();
  const [S, d, k, h] = it.next().value.split(" ").map(Number);

  const MOD = 1000000007;

  if (S > d + k + h) return 0;

  const dp = Array.from({ length: S + 1 }, () =>
    Array.from({ length: d + 1 }, () =>
      Array.from({ length: k + 1 }, () => Array(h + 1).fill(-1))
    )
  );

  const dfs = (curSong, curD, curK, curH) => {
    if (curD > d || curK > k || curH > h) return 0;

    if (S === curSong) {
      if (curD === d && curK === k && curH === h) return (dp[S][d][k][h] = 1);
      else return 0;
    }

    if (dp[curSong][curD][curK][curH] !== -1)
      return dp[curSong][curD][curK][curH];

    let result = 0;

    result = (result + dfs(curSong + 1, curD + 1, curK, curH)) % MOD;
    result = (result + dfs(curSong + 1, curD, curK + 1, curH)) % MOD;
    result = (result + dfs(curSong + 1, curD, curK, curH + 1)) % MOD;

    result = (result + dfs(curSong + 1, curD + 1, curK + 1, curH)) % MOD;
    result = (result + dfs(curSong + 1, curD + 1, curK, curH + 1)) % MOD;
    result = (result + dfs(curSong + 1, curD, curK + 1, curH + 1)) % MOD;

    result = (result + dfs(curSong + 1, curD + 1, curK + 1, curH + 1)) % MOD;

    return (dp[curSong][curD][curK][curH] = result % MOD);
  };

  return dfs(0, 0, 0, 0);
}

console.log(solve());