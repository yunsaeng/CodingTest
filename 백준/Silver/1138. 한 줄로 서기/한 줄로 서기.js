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
  const N = +input[0];
  const line = input[1]
    .split(" ")
    .map((e, i) => [i + 1, Number(e)])
    .reverse();

  const result = [];
  for (let i = 0; i < N; i++) {
    const [person, left] = line[i];
    let queue = [];
    while (result.length > left) {
      const temp = result.pop();
      queue.unshift(temp);
    }
    result.push(...[person, ...queue]);
  }

  console.log(result.join(" "));
}