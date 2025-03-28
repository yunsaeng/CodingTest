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
  const dp = Array.from({ length: N + 1 }, () => Array(10).fill(1));

  for (let i = 2; i <= N; i++) {
    for (let j = 1; j <= 9; j++) {
      dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % 10007;
    }
  }

  let answer = 0;
  for (let i = 0; i <= 9; i++) {
    answer += dp[N][i];
  }
  console.log(answer % 10007);
}