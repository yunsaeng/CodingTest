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
  let result = [];
  for (let i = 0; i < input.length - 1; i++) {
    let arr = [];
    for (let j = 0; j < input[i].length; j++) {
      if (
        input[i][j] === "(" ||
        input[i][j] === ")" ||
        input[i][j] === "[" ||
        input[i][j] === "]"
      ) {
        if (arr.length === 0) {
          arr.push(input[i][j]);
        } else {
          if (arr[arr.length - 1] === "(" && input[i][j] === ")") {
            arr.pop();
          } else if (arr[arr.length - 1] === "[" && input[i][j] === "]") {
            arr.pop();
          } else {
            arr.push(input[i][j]);
          }
        }
      }
    }
    if (arr.length === 0) {
      result.push("yes");
    } else {
      result.push("no");
    }
  }
  console.log(result.join("\n"));
}
