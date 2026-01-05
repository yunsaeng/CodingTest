const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

// 문제 해결 로직
function solve() {
  const it = input.values();
  const [n, w, L] = it.next().value.split(" ").map(Number);
  const trucks = it.next().value.split(" ").map(Number);

  // 다리 상태를 0으로 초기화 (길이 w만큼)
  let bridge = Array(w).fill(0);
  let bridgeWeight = 0;
  let time = 0;
  let truckIdx = 0;

  // 모든 트럭이 다리에 올라갈 때까지 시뮬레이션
  while (truckIdx < n) {
    time++;
    
    // 1. 다리의 맨 끝에서 트럭(또는 0)이 나감
    bridgeWeight -= bridge.shift();

    // 2. 새 트럭이 들어올 수 있는지 확인
    if (bridgeWeight + trucks[truckIdx] <= L) {
      // 들어올 수 있으면 트럭 추가
      const currentTruck = trucks[truckIdx++];
      bridge.push(currentTruck);
      bridgeWeight += currentTruck;
    } else {
      // 무게 초과로 못 들어오면 0을 추가하여 시간만 보냄
      bridge.push(0);
    }
  }

  // 마지막 트럭이 다리에 올라온 시점에서 끝났으므로, 
  // 그 트럭이 다리를 완전히 건너는 시간(w)을 더해줌
  return time + w;
}

console.log(solve());