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
  let [N, M] = input[0].split(" ").map(Number);
  const shop = input.slice(1).map((line) => line.split(" ").map(Number));

  let minPackage = Infinity;
  let minEach = Infinity;

  for (const [pkg, each] of shop) {
    minPackage = Math.min(minPackage, pkg);
    minEach = Math.min(minEach, each);
  }

  if (minPackage >= minEach * 6) {
    console.log(minEach * N);
  } else {
    const bundle = Math.floor(N / 6);
    const remain = N % 6;
    const cost = bundle * minPackage + Math.min(minPackage, remain * minEach);
    console.log(cost);
  }
}