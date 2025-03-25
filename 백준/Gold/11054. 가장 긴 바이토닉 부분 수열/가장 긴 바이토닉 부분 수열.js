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
  const N = +input[0];
  const numbers = input[1].split(" ").map(Number);
  const reverseNumbers = [...numbers].reverse();
  const ASCdp = Array(N).fill(1);
  const DESCdp = Array(N).fill(1);
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] > numbers[j]) ASCdp[i] = Math.max(ASCdp[i], ASCdp[j] + 1);
      if (reverseNumbers[i] > reverseNumbers[j])
        DESCdp[i] = Math.max(DESCdp[i], DESCdp[j] + 1);
    }
  }

  let answer = 0;
  for (let i = 0; i < N; i++) {
    answer = Math.max(answer, ASCdp[i] + DESCdp[N - i - 1] - 1);
  }

  console.log(answer);
}