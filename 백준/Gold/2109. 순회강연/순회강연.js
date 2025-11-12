const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

// 문제 해결 로직
function solve() {
  const it = input.values();
  const n = +it.next().value;

  const schedules = [];
  let maxDay = 0;
  for (let i = 0; i < n; i++) {
    const [p, d] = it.next().value.split(" ").map(Number);
    schedules.push([p, d]);
    maxDay = Math.max(maxDay, d);
  }
  schedules.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

  let result = 0;
  for (let cur = maxDay; cur > 0; cur--) {
    const temp = schedules.at(-1);
    if (temp[1] !== cur) continue;

    const [p, d] = schedules.pop();
    result += p;
    schedules.forEach(([tp, td], idx) => {
      if (td === d) schedules[idx][1] -= 1;
    });
    schedules.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
  }

  return result;
}

console.log(solve());