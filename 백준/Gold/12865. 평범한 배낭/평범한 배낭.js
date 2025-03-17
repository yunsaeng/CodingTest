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
  const [N, K] = input[0].split(" ").map(Number);
  const weights = [];
  const happy = [];

  input.slice(1).forEach((line) => {
    const [w, h] = line.split(" ").map(Number);
    weights.push(w);
    happy.push(h);
  });

  const dp = Array(K + 1).fill(0);

  for (let i = 0; i < N; i++) {
    const weight = weights[i];
    const curHappy = happy[i];
    for (let j = K; j >= weight; j--) {
      dp[j] = Math.max(dp[j], dp[j - weight] + curHappy);
    }
  }

  console.log(dp[K]);
}