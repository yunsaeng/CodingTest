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
  const str = input[0];
  const N = str.length;
  const mod = 1000000;
  const dp = Array(N + 1).fill(0);

  if (str[0] === "0") {
    console.log(0);
    return;
  }

  dp[0] = 1; // 빈 문자열을 해석하는 방법 1개
  dp[1] = 1;

  for (let i = 2; i <= N; i++) {
    const oneDigit = +str[i - 1];
    const twoDigit = +str.slice(i - 2, i);

    if (oneDigit >= 1) dp[i] += dp[i - 1];
    if (twoDigit >= 10 && twoDigit <= 26) dp[i] += dp[i - 2];

    dp[i] %= mod;
  }

  console.log(dp[N]);
}