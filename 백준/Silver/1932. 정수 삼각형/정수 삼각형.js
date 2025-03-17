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
  const tree = input.slice(1).map((line) => line.split(" ").map(Number));

  const dp = Array.from({ length: N }, () => Array(N).fill(0));

  for (let i = 0; i < N; i++) {
    dp[N - 1][i] = tree[N - 1][i];
  }

  for (let i = N - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[i][j] = tree[i][j] + Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
    }
  }

  console.log(dp[0][0]);
}