const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

// 문제 해결 로직
function solve() {
  const it = input.values();
  const N = +it.next().value;
  const start = it.next().value.split("").map(Number); // Python의 d1
  const end = it.next().value.split("").map(Number);   // Python의 d2

  // DP = [[0]*10 for i in range(N+1)]
  // JavaScript에서 2차원 배열을 올바르게 초기화하는 방법입니다.
  const DP = Array.from({ length: N + 1 }, () => Array(10).fill(0));

  // for n in range(N):
  //   n = N-1-n
  // (N-1부터 0까지 역순으로 순회)
  for (let n = N - 1; n >= 0; n--) {
    
    // for i in range(10):
    for (let i = 0; i < 10; i++) {
      
      // d = (d2[n]-d1[n]-i)%10
      // ❗️ JavaScript의 % 연산은 음수를 반환할 수 있으므로 보정합니다.
      const diff = end[n] - start[n] - i;
      const d = ((diff % 10) + 10) % 10; // (d: 현재 n번째 다이얼을 시계방향(왼쪽)으로 돌려야 하는 횟수)

      // 1. 시계방향(왼쪽)으로 d만큼 돌리는 경우 (비용: d)
      //    -> 다음 다이얼(n+1)은 (i+d)만큼의 영향을 받음
      const cost1 = d + DP[n + 1][(i + d) % 10];
      
      // 2. 반시계방향(오른쪽)으로 (10-d)만큼 돌리는 경우 (비용: 10-d)
      //    -> 다음 다이얼(n+1)은 영향을 받지 않음 (i 그대로)
      const cost2 = (10 - d) + DP[n + 1][i];

      // DP[n][i] = min(...)
      DP[n][i] = Math.min(cost1, cost2);
    }
  }

  // print(DP[0][0])
  return DP[0][0];
}

console.log(solve());