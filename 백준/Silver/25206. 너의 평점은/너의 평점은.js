// const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  // input: fs.createReadStream("./input_boj.txt"),
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});

function solution(input) {
  const grade = {
    "A+": 4.5,
    A0: 4.0,
    "B+": 3.5,
    B0: 3.0,
    "C+": 2.5,
    C0: 2.0,
    "D+": 1.5,
    D0: 1.0,
    F: 0.0,
  };

  let totalGrade = 0;
  let temp = 0;

  for (let i = 0; i < input.length; i++) {
    let subGrade = input[i].split(" ");
    if (subGrade[2] === "P") {
      continue;
    }
    totalGrade += Number(subGrade[1]);
    temp += Number(subGrade[1]) * Number(grade[subGrade[2]]);
  }

  const averGrade = temp / totalGrade;

  console.log(averGrade.toFixed(6));
}
