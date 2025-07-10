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
  const balls = input[1].split("");
  const N = balls.length;

  // 1. R을 왼쪽으로 몰기
  let rLeft = 0;
  let i = 0;
  while (i < N && balls[i] === "R") i++;
  for (; i < N; i++) if (balls[i] === "R") rLeft++;

  // 2. R을 오른쪽으로 몰기
  let rRight = 0;
  i = N - 1;
  while (i >= 0 && balls[i] === "R") i--;
  for (; i >= 0; i--) if (balls[i] === "R") rRight++;

  // 3. B 왼쪽
  let bLeft = 0;
  i = 0;
  while (i < N && balls[i] === "B") i++;
  for (; i < N; i++) if (balls[i] === "B") bLeft++;

  // 4. B 오른쪽
  let bRight = 0;
  i = N - 1;
  while (i >= 0 && balls[i] === "B") i--;
  for (; i >= 0; i--) if (balls[i] === "B") bRight++;

  const answer = Math.min(rLeft, rRight, bLeft, bRight);
  console.log(answer);
}