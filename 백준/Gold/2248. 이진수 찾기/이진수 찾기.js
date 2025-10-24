const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

// 문제 해결 로직
function solve() {
  const it = input.values();
  let [N, L, I] = it.next().value.split(" ").map(BigInt);

  const dp = Array.from({ length: Number(N) + 1 }, () => Array(Number(N) + 1).fill(0n));
  dp[0][0] = 1n;
  for (let i = 1; i <= Number(N); i++) {
    dp[i][0] = 1n;
    for (let j = 1; j <= i; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1];
    }
  }

  let result = "";
  for (let i = Number(N) - 1; i >= 0; i--) {
    const sum = dp[i].reduce((acc, curr, idx) => acc + (idx <= Number(L) ? curr : 0n), 0n);
    if (I > sum) {
      result += "1";
      I -= sum;
      L -= 1n;
    } else {
      result += "0";
    }
  }

  return result;
}

console.log(solve());