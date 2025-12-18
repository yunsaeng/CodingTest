const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

// 문제 해결 로직
function solve() {
  const N = +input[0];
  const sequence = input[1].split(" ").map(Number);

  // 두 수의 합이 가질 수 있는 범위: -100,000 * 2 ~ 100,000 * 2
  // 배열 인덱스로 쓰기 위해 200,000을 더해 오프셋을 줍니다.
  const OFFSET = 200000;
  const isSumExist = new Uint8Array(400001);

  let result = 0;

  for (let i = 0; i < N; i++) {
    const target = sequence[i];

    // 1. 현재 숫자(target)가 좋은 수인지 확인
    // target = (a[x] + a[y]) + a[z]  =>  target - a[z] = a[x] + a[y]
    for (let j = 0; j < i; j++) {
      if (isSumExist[target - sequence[j] + OFFSET]) {
        result++;
        break; // 좋은 수임이 확인되면 바로 탈출
      }
    }

    // 2. 다음 숫자를 위해 현재 숫자와 이전 숫자들의 합을 기록
    // (a[i] + a[0...i]) 를 기록함으로서 다음 루프의 a[x] + a[y] 후보가 됨
    for (let j = 0; j <= i; j++) {
      isSumExist[sequence[i] + sequence[j] + OFFSET] = 1;
    }
  }

  return result;
}

console.log(solve());