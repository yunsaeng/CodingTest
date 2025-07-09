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
  const sequence = input
    .slice(1)
    .map(Number)
    .sort((a, b) => a - b);

  const count = new Map();
  for (const num of sequence) count.set(num, (count.get(num) || 0) + 1);

  // 1. 산술평균
  let mean = Math.round(sequence.reduce((a, b) => a + b, 0) / N);
  if (Object.is(mean, -0)) mean = 0;
  console.log(mean);

  // 2. 중앙값
  console.log(sequence[Math.floor(N / 2)]);

  // 3. 최빈값
  const countArr = [...count.entries()];
  const maxFreq = Math.max(...countArr.map(([_, freq]) => freq));
  const freqCandidates = countArr
    .filter(([_, freq]) => freq === maxFreq)
    .map(([num]) => num)
    .sort((a, b) => a - b);
  console.log(
    freqCandidates.length > 1 ? freqCandidates[1] : freqCandidates[0]
  );

  // 4. 범위
  console.log(sequence[sequence.length - 1] - sequence[0]);
}