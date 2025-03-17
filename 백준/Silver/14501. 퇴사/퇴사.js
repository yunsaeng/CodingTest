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
  const day = [];
  const price = [];

  input.slice(1).forEach((line) => {
    const [d, p] = line.split(" ").map(Number);
    day.push(d);
    price.push(p);
  });

  let answer = 0;
  const dp = Array(N).fill(0);
  for (let i = N - 1; i >= 0; i--) {
    const during = day[i];

    if (i + during === N) {
      dp[i] = price[i];
    }

    for (let j = i + during; j < N; j++) {
      dp[i] = Math.max(dp[i], price[i] + dp[j]);
    }
    answer = Math.max(answer, dp[i]);
  }

  console.log(answer);
}