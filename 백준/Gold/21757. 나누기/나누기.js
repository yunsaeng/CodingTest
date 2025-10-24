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

  if (sum[N - 1] % 4n !== 0n) return 0;

  let i = 0n;
  let j = 0n;
  let k = 0n;
  for (let idx = 0; idx < N - 1; idx++) {
    if (sum[idx] === (3n * sum[N - 1]) / 4n) k += j;
    if (sum[idx] === sum[N - 1] / 2n) j += i;
    if (sum[idx] === sum[N - 1] / 4n) i += 1n;
  }
  return k.toString();
}

console.log(solve());
