const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

// 문제 해결 로직
function solve() {
  const it = input.values();
  const [A, B] = it.next().value.split(" ").map(Number);

  if (A > B) return ">";
  if (A < B) return "<";
  return "==";
}

console.log(solve());
