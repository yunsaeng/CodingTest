const fs = require("fs");
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const [N, K] = input[0].split(" ").map(Number);
  const A = input[1].split(" ").map(Number); // 내구도 배열 (길이 2N)
  const robots = new Array(N).fill(false); // 로봇 존재 여부 (길이 N, 위쪽 벨트만 관리)

  let brokenCount = 0; // 내구도 0인 칸의 개수 (매번 세지 않고 변수로 관리)
  
  // 초기 내구도 0 개수 카운트 (입력부터 0일 수도 있으므로)
  // 사실 문제 조건상 초기엔 0이 없겠지만 안전하게
  /* 주의: 편의상 brokenCount는 루프 돌면서 실시간으로 체크하거나, 
     매 단계 마지막에 A.filter로 세도 N이 작아서 통과합니다.
     여기서는 정확성을 위해 매 단계 4번에서 전체 스캔하겠습니다.
  */

  let step = 0;

  while (true) {
    step++;

    // 1. 벨트가 각 칸 위에 있는 로봇과 함께 한 칸 회전한다.
    A.unshift(A.pop());     // 내구도 배열 회전
    robots.pop();           // 로봇 배열 회전 (맨 끝은 버림)
    robots.unshift(false);  // 앞에 빈 공간 추가
    
    // 회전 후 내리는 위치(N-1)에 로봇이 있으면 즉시 내린다.
    if (robots[N - 1]) {
      robots[N - 1] = false;
    }

    // 2. 가장 먼저 벨트에 올라간 로봇부터, 벨트가 회전하는 방향으로 한 칸 이동할 수 있다면 이동한다.
    // 먼저 올라간 로봇 = 인덱스가 큰 로봇 (N-2 부터 0까지 역순 탐색)
    for (let i = N - 2; i >= 0; i--) {
      // 현재 칸에 로봇이 있고, 다음 칸에 로봇이 없고, 다음 칸 내구도가 1 이상이면
      if (robots[i] && !robots[i + 1] && A[i + 1] > 0) {
        robots[i] = false;       // 현재 위치 비움
        robots[i + 1] = true;    // 다음 위치로 이동
        A[i + 1]--;              // 내구도 감소
        
        // 이동 후 내리는 위치면 즉시 내림
        if (i + 1 === N - 1) {
          robots[N - 1] = false;
        }
      }
    }

    // 3. 올리는 위치에 있는 칸의 내구도가 0이 아니면 올리는 위치에 로봇을 올린다.
    if (A[0] > 0) {
      robots[0] = true;
      A[0]--;
    }

    // 4. 내구도가 0인 칸의 개수가 K개 이상이라면 과정을 종료한다.
    let count = 0;
    for (let i = 0; i < 2 * N; i++) {
      if (A[i] === 0) count++;
    }
    
    if (count >= K) break;
  }

  return step;
}

console.log(solve());