const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const [N, L] = input[0].split(" ").map(Number);
  const board = input.slice(1).map((row) => row.split(" ").map(Number));
  const rotateBoard = board[0].map((_, i) => board.map((row) => row[i]));

  const canPass = (line) => {
    let index = 0;
    let prev = line[index++];

    const isRamp = Array(N).fill(false);

    while (index < N) {
      const cur = line[index];

      if (Math.abs(prev - cur) > 1) return false;

      if (prev === cur) {
        prev = cur;
        index++;
      } else if (prev > cur) {
        if (index + L - 1 >= N) return false;

        for (let dist = 0; dist < L; dist++) {
          if (cur !== line[index + dist]) return false;

          isRamp[index + dist] = true;
        }

        prev = line[index + L - 1];
        index += L;
      } else {
        if (index - L < 0) return false;

        for (let dist = 1; dist <= L; dist++) {
          if (prev !== line[index - dist]) return false;

          if (isRamp[index - dist]) return false;

          isRamp[index - dist] = true;
        }

        prev = cur;
        index++;
      }
    }

    return true;
  };

  let result = 0;
  for (const line of board) if (canPass(line)) result++;
  for (const line of rotateBoard) if (canPass(line)) result++;

  return result;
}

console.log(solve());