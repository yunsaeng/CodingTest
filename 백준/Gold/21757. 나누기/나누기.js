const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

// 문제 해결 로직
function solve() {
  const it = input.values();
  const N = it.next().value;
  const sequence = it.next().value.split(" ").map(BigInt);

  const sum = Array(N).fill(0n);
  sum[0] = sequence[0];
  for (let i = 1; i < N; i++) {
    sum[i] = sum[i - 1] + sequence[i];
  }

  let result = 0n;
  for (let i = 1; i < N - 2; i++) {
    if (sum[i] !== sum[N - 1] - sum[i]) continue;

    let temp1 = 0n;
    for (let j = 0; j < i; j++) {
      if (sum[j] !== sum[i] - sum[j]) continue;
      temp1 += 1n;
    }

    let temp2 = 0n;
    for (let k = i + 1; k < N - 1; k++) {
      if (sum[k] - sum[i] !== sum[N - 1] - sum[k]) continue;
      temp2 += 1n;
    }

    result += temp1 * temp2;
  }

  return result.toString();
}
// 결과 출력
console.log(solve());
