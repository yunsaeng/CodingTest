const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

// 문제 해결 로직
function solve() {
  const it = input.values();
  const N = +it.next().value;

  const result = [];

  for (let i = 1; i <= N; i++) {
    result.push("*".repeat(i));
  }

  return result.join("\n");
}

console.log(solve());