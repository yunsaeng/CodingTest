const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin, // 백준 제출 시
  // input: fs.createReadStream("./example.txt"), // 로컬 테스트용
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});

function solution(input) {
  const memo = Array.from({ length: 21 }, () =>
    Array.from({ length: 21 }, () => Array(21).fill(undefined))
  );

  function w(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) return 1;
    if (a > 20 || b > 20 || c > 20) return w(20, 20, 20);

    if (memo[a][b][c] !== undefined) return memo[a][b][c];

    if (a < b && b < c) {
      memo[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
    } else {
      memo[a][b][c] =
        w(a - 1, b, c) +
        w(a - 1, b - 1, c) +
        w(a - 1, b, c - 1) -
        w(a - 1, b - 1, c - 1);
    }

    return memo[a][b][c];
  }

  for (const line of input) {
    const [a, b, c] = line.split(" ").map(Number);
    if (a === -1 && b === -1 && c === -1) break;
    console.log(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
  }
}