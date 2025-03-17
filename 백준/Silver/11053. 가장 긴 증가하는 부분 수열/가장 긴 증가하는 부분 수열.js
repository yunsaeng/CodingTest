const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin, // 백준 제출시 활성화
  // input: fs.createReadStream("./example.txt"), // 로컬 테스트할 때 파일을 통해 입력 받음
  // output: process.stdout, // 입력값 보임
});

let input = [];

rl.on("line", function (line) {
  input.push(line); // 한 줄씩 읽어서 input 배열에 저장
}).on("close", function () {
  solution(input);
  process.exit();
});

function solution(input) {
  const N = +input[0];
  const sequence = input[1].split(" ").map((e) => +e);
  const dp = Array(N).fill(1);
  let answer = 0;

  for (let i = 0; i < N; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (sequence[i] > sequence[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
    answer = Math.max(answer, dp[i]);
  }
  console.log(answer);
}