const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  let [N, M, x, y, K] = input[0].split(" ").map(Number);
  const board = input.slice(1, -1).map((row) => row.split(" ").map(Number));
  const commands = input[input.length - 1].split(" ").map(Number);

  const dir = [null, [0, 1], [0, -1], [-1, 0], [1, 0]];
  let dice = [0, 0, 0, 0, 0, 0, 0];
  const result = [];

  for (const command of commands) {
    const [dx, dy] = dir[command];
    const nx = x + dx;
    const ny = y + dy;

    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

    const [_, top, back, right, left, front, bottom] = dice;

    if (command === 1) {
      // 동쪽
      dice[1] = left;
      dice[3] = top;
      dice[4] = bottom;
      dice[6] = right;
    } else if (command === 2) {
      // 서쪽
      dice[1] = right;
      dice[3] = bottom;
      dice[4] = top;
      dice[6] = left;
    } else if (command === 3) {
      // 북쪽
      dice[1] = front;
      dice[2] = top;
      dice[5] = bottom;
      dice[6] = back;
    } else if (command === 4) {
      // 남쪽
      dice[1] = back;
      dice[2] = bottom;
      dice[5] = top;
      dice[6] = front;
    }

    x = nx;
    y = ny;

    if (board[x][y] === 0) {
      board[x][y] = dice[6];
    } else {
      dice[6] = board[x][y];
      board[x][y] = 0;
    }

    result.push(dice[1]);
  }

  return result.join("\n");
}

console.log(solve());