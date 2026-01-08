const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

// 문제 해결 로직
function solve() {
  const it = input.values();
  const N = +it.next().value;
  const T = +it.next().value;
  const recommend = it.next().value.split(" ").map(Number);

  const m = new Map();
  for(let i = 0; i < T; i++) {
    const cur = recommend[i];

    if (m.size >= N && !m.has(cur)) {
      let minKey = Infinity;
      let minValue = Infinity;

      for(const [key, value] of m) {
        if (minValue > value) {
          minValue = value;
          minKey = key;
        }
      }

      m.delete(minKey);
    }

    m.set(cur, (m.get(cur) || 0) + 1);
  }

  return [...m.keys()].sort((a, b) => a - b).join(" ");
}

console.log(solve());