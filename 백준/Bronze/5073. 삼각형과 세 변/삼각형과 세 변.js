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
  input.pop(); // 마지막 값 제거

  input.forEach((line) => {
    const [a, b, c] = line
      .split(" ")
      .map(Number)
      .sort((x, y) => x - y);

    if (c >= a + b) {
      console.log("Invalid"); // 삼각형 성립 조건 확인
    } else if (a === b && b === c) {
      console.log("Equilateral"); // 정삼각형
    } else if (a === b || b === c) {
      console.log("Isosceles"); // 이등변삼각형
    } else {
      console.log("Scalene"); // 일반 삼각형
    }
  });
}