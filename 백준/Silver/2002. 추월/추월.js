const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const N = +input[0];
  const inTunnel = input.slice(1, N + 1);
  const outTunnel = input.slice(N + 1);

  const inMap = new Map();
  for(let i = 0; i < N; i++) {
    inMap.set(inTunnel[i], i);
  }

  const outOrder = outTunnel.map((car) => inMap.get(car));

  let result = 0;
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if(outOrder[i] > outOrder[j]) {
        result++;
        break;
      }
    }
  }

  return result;
}

console.log(solve());