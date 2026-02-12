const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const it = input.values();
  const N = +it.next().value;
  const preferences = Array.from({ length: N * N + 1 }, () => []);
  const studentOrder = [];
  for (let i = 0; i < N * N; i++) {
    const [student, ...like] = it.next().value.split(" ").map(Number);
    preferences[student].push(...like);
    studentOrder.push(student);
  }
  const classroom = Array.from({ length: N }, () => Array(N).fill(0));

  const getAdjacencyInfo = (student, row, col) => {
    const dirs = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    let likeCount = 0;
    let emptyCount = 0;

    for (const [dr, dc] of dirs) {
      const nr = row + dr;
      const nc = col + dc;
      if (nr >= 0 && nr < N && nc >= 0 && nc < N) {
        const near = classroom[nr][nc];
        if (near === 0) {
          emptyCount++;
        } else {
          if (preferences[student].includes(near)) likeCount++;
        }
      }
    }

    return { likeCount, emptyCount };
  };

  const compare = (currentBest, newCandidate) => {
    if (newCandidate.likeCount !== currentBest.likeCount) {
      return newCandidate.likeCount > currentBest.likeCount;
    }
    if (newCandidate.emptyCount !== currentBest.emptyCount) {
      return newCandidate.emptyCount > currentBest.emptyCount;
    }
    if (newCandidate.row !== currentBest.row) {
      return newCandidate.row < currentBest.row;
    }
    return newCandidate.col < currentBest.col;
  };

  const findBestSeat = (student) => {
    let bestSeat = null;

    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        if (classroom[row][col] !== 0) continue;

        const { likeCount, emptyCount } = getAdjacencyInfo(student, row, col);

        if (
          !bestSeat ||
          compare(bestSeat, { row, col, likeCount, emptyCount })
        ) {
          bestSeat = { row, col, likeCount, emptyCount };
        }
      }
    }

    return bestSeat;
  };

  for (const student of studentOrder) {
    const { row, col } = findBestSeat(student);
    classroom[row][col] = student;
  }

  let result = 0;
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      const student = classroom[row][col];
      const { likeCount } = getAdjacencyInfo(student, row, col);
      result += likeCount === 0 ? 0 : Math.pow(10, likeCount - 1);
    }
  }

  return result;
}

console.log(solve());