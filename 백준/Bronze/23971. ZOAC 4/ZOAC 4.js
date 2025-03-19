const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin, // 백준 제출시 활성화
  // input: fs.createReadStream("./example.txt"), // 로컬 테스트할 때 파일을 통해 입력 받음
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});

function solution(input) {
  const [H, W, N, M] = input[0].split(" ").map(Number);

  let answer = 0;
  for (let i = 0; i < H; i += N + 1) {
    for (let j = 0; j < W; j += M + 1) {
      answer++;
    }
  }
  console.log(answer);
}