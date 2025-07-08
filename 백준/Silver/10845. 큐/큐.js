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
  const commands = input.slice(1).map((line) => line.split(" "));
  const queue = [];
  const result = [];

  for (const command of commands) {
    if (command[0] === "push") {
      queue.push(Number(command[1]));
    }
    if (command[0] === "pop") {
      if (queue.length === 0) result.push(-1);
      else result.push(queue.shift());
    }
    if (command[0] === "size") {
      result.push(queue.length);
    }
    if (command[0] === "empty") {
      if (queue.length === 0) result.push(1);
      else result.push(0);
    }
    if (command[0] === "front") {
      if (queue.length === 0) result.push(-1);
      else result.push(queue[0]);
    }
    if (command[0] === "back") {
      if (queue.length === 0) result.push(-1);
      else result.push(queue[queue.length - 1]);
    }
  }

  console.log(result.join("\n"));
}