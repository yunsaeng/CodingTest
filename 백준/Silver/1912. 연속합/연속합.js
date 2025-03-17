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
  const arr = input[1].split(" ").map(Number);

  let maxSum = arr[0]; // 전체 최대 합
  let currentSum = arr[0]; // 현재 부분합

  for (let i = 1; i < N; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]); // 이전 값과 현재 값 비교
    maxSum = Math.max(maxSum, currentSum);
  }

  console.log(maxSum);
}