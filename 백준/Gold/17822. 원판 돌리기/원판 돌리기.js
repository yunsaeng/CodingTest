const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const it = input.values();
  const [N, M, T] = it.next().value.split(" ").map(Number);

  let board = [];
  for (let i = 0; i < N; i++)
    board.push(it.next().value.split(" ").map(Number));

  const rotation = [];
  for (let i = 0; i < T; i++)
    rotation.push(it.next().value.split(" ").map(Number));

  const rotate = (arr, d, k) => {
    let result = [...arr];
    const len = arr.length;
    const cnt = k % len;

    if (d === 0) {
      result = [...result.slice(len - cnt), ...result.slice(0, len - cnt)];
    } else {
      result = [...result.slice(cnt), ...result.slice(0, cnt)];
    }

    return result;
  };

  const getSum = () => {
    let sum = 0;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        sum += board[i][j];
      }
    }

    return sum;
  };

  const getCnt = () => {
    let cnt = 0;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (board[i][j] !== 0) cnt++;
      }
    }

    return cnt;
  };

  const changeBoard = () => {
    let isDelete = false;
    const newBoard = board.map((line) => [...line]);

    const dir = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (board[i][j] === 0) continue;

        for (const [di, dj] of dir) {
          const ni = i + di;
          const nj = (j + dj + M) % M;

          if (ni >= 0 && ni < N && board[i][j] === board[ni][nj]) {
            newBoard[i][j] = 0;
            newBoard[ni][nj] = 0;
            isDelete = true;
          }
        }
      }
    }

    if (isDelete) {
      board = newBoard;
    } else {
      const aver = getSum() / getCnt();

      for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
          if (board[i][j] === 0) continue;

          if (board[i][j] > aver) board[i][j]--;
          else if (board[i][j] < aver) board[i][j]++;
        }
      }
    }
  };

  for (const [x, d, k] of rotation) {
    for (let i = x - 1; i < N; i += x) {
      board[i] = rotate(board[i], d, k);
    }
    changeBoard();
  }

  return getSum();
}

console.log(solve());