const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

// 문제 해결 로직
function solve() {
  const it = input.values();
  const N = +it.next().value;

  // true : SK가 이김, false : CY가 이김
  const dp = Array(N + 1).fill(false);
  dp[2] = true;

  for (let i = 4; i <= N; i++) {
    if (!dp[i - 1] || !dp[i - 3]) dp[i] = true;
  }

  return dp[N] ? "SK" : "CY";
}

console.log(solve());
