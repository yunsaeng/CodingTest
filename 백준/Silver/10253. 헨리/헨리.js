const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const it = input.values();
  const T = +it.next().value;

  const GCD = (maxNum, minNum) => {
    if (minNum === 0) return maxNum;
    return GCD(minNum, maxNum % minNum);
  };

  const result = [];
  for (let t = 0; t < T; t++) {
    let [a, b] = it.next().value.split(" ").map(Number);

    while (a > 1) {
      const x = Math.ceil(b / a);

      a = a * x - b;
      b = b * x;

      const gcd = GCD(a, b);
      a /= gcd;
      b /= gcd;
    }

    result.push(b);
  }

  return result.join("\n");
}

console.log(solve());