const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const it = input.values();
  const [W, H] = it.next().value.split(" ").map(Number);
  const N = +it.next().value;

  // 방향과 거리를 입력받아 왼쪽 상단(0,0)으로부터의 시계방향 거리를 반환
  const getLinearDist = (dir, dist) => {
    if (dir === 1) return dist; // 북쪽: 왼쪽에서 dist만큼
    if (dir === 2) return W + H + (W - dist); // 남쪽: 북+동+ (오른쪽에서부터 거꾸로)
    if (dir === 3) return W + H + W + (H - dist); // 서쪽: 북+동+남+ (아래에서부터 거꾸로)
    if (dir === 4) return W + dist; // 동쪽: 북+ (위에서 dist만큼)
  };

  /* 주의: 기준점과 방향 설정에 따라 수식은 달라질 수 있습니다.
     위 수식은 (0,0)에서 시작해 북->동->남->서 순서로 펼친 예시입니다.
  */

  const totalPerimeter = 2 * (W + H);
  const shopPositions = [];

  for (let i = 0; i < N; i++) {
    const [d, pos] = it.next().value.split(" ").map(Number);
    shopPositions.push(getLinearDist(d, pos));
  }

  const [dkDir, dkPos] = it.next().value.split(" ").map(Number);
  const dkLinearPos = getLinearDist(dkDir, dkPos);

  let totalDist = 0;
  for (const shopPos of shopPositions) {
    const d = Math.abs(dkLinearPos - shopPos);
    // 시계 방향과 반시계 방향 중 최소값 선택
    totalDist += Math.min(d, totalPerimeter - d);
  }

  return totalDist;
}

console.log(solve());