const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const line = input[0].split("");

  const stack = [];
  let temp = 1;
  let result = 0;
  for (let i = 0; i < line.length; i++) {
    const cur = line[i];

    if (cur === "(") {
      stack.push(cur);
      temp *= 2;
    } else if (cur === "[") {
      stack.push(cur);
      temp *= 3;
    } else if (cur === ")") {
      if (stack.length === 0 || stack.at(-1) !== "(") return 0;

      if (line[i - 1] === "(") result += temp;

      stack.pop();
      temp = Math.floor(temp / 2);
    } else if (cur === "]") {
      if (stack.length === 0 || stack.at(-1) !== "[") return 0;

      if (line[i - 1] === "[") result += temp;

      stack.pop();
      temp = Math.floor(temp / 3);
    }
  }

  if (stack.length !== 0) return 0;

  return result;
}

console.log(solve());