const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

// 문제 해결 로직
function solve() {
  const it = input.values();
  const N = +it.next().value;

  if (N >= 90) return "A";
  if (N >= 80) return "B";
  if (N >= 70) return "C";
  if (N >= 60) return "D";
  return "F";
}

console.log(solve());