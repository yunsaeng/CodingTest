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
  const getCombinations = (arr, n) => {
    if (n === 1) return arr.map((e) => [e]);
    return arr.flatMap((fixed, idx) =>
      getCombinations(arr.slice(idx + 1), n - 1).map((comb) => [fixed, ...comb])
    );
  };

  let result = [];
  for (let n = 1; n <= 10; n++)
    result.push(...getCombinations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], n));

  result = result
    .map((e) => Number(e.reverse().join("")))
    .sort((a, b) => a - b);

  const answer = result[N] !== undefined ? result[N] : -1;

  console.log(answer);
}