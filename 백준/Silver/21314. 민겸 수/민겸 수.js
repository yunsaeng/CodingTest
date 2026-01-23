const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const it = input.values();
  const rome = it.next().value;
  const N = rome.length;

  let max = "";
  let min = "";
  let M = 0;
  for (let i = 0; i < N; i++) {
    if (rome[i] === "K") {
      max += "5" + "0".repeat(M);
      min += (M >= 1 ? "1" + "0".repeat(M - 1) : "") + "5";
      M = 0;
    } else M++;
  }

  if (M >= 1) {
    max += "1".repeat(M);
    min += "1" + "0".repeat(M - 1);
  }

  return `${max}\n${min}`;
}

console.log(solve());