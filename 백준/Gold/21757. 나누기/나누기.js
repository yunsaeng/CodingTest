const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

// 문제 해결 로직
function solve() {
  const it = input.values();
  const N = it.next().value;
  const sequence = it.next().value.split(" ").map(Number);

  const sum = Array(N).fill(0);
  sum[0] = sequence[0];
  for (let i = 1; i < N; i++) {
    sum[i] = sum[i - 1] + sequence[i];
  }

  let result = 0;
  for (let i = 0; i < N - 3; i++) {
    for (let j = i + 1; j < N - 2; j++) {
      for (let k = j + 1; k < N - 1; k++) {
        const quarter1 = sum[i];
        const quarter2 = sum[j] - sum[i];
        const quarter3 = sum[k] - sum[j];
        const quarter4 = sum[N - 1] - sum[k];
        if(quarter1 === quarter2 && quarter2 === quarter3 && quarter3 === quarter4) result++;
      }
    }
  }
  
  return result;
}
// 결과 출력
console.log(solve());
