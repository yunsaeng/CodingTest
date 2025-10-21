const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

// 문제 해결 로직
function solve() {
  const it = input.values();
  const S = it.next().value;

  const workers = Array(3).fill(0);
  const dp = Array.from({ length: 51 }, () =>
    Array.from({ length: 51 }, () =>
      Array.from({ length: 51 }, () =>
        Array.from({ length: 4 }, () => Array(4).fill(false))
      )
    )
  );

  for (const alpha of S) {
    if (alpha === "A") {
      workers[0]++;
    } else if (alpha === "B") {
      workers[1]++;
    } else if (alpha === "C") {
      workers[2]++;
    }
  }

  const sequence = Array(51).fill("");
  const dfs = (a, b, c, bbefore, before) => {
    if (a === workers[0] && b === workers[1] && c === workers[2]) return true;

    if (dp[a][b][c][bbefore][before]) return false;
    dp[a][b][c][bbefore][before] = true;

    if (a < workers[0]) {
      sequence[a + b + c] = "A";
      if (dfs(a + 1, b, c, before, 1)) return true;
    }
    if (b < workers[1]) {
      sequence[a + b + c] = "B";
      if (before !== 2) {
        if (dfs(a, b + 1, c, before, 2)) return true;
      }
    }
    if (c < workers[2]) {
      sequence[a + b + c] = "C";
      if (before !== 3 && bbefore !== 3) {
        if (dfs(a, b, c + 1, before, 3)) return true;
      }
    }

    return false;
  };

  let result = "";
  if (dfs(0, 0, 0, 0, 0)) {
    for (let i = 0; i < S.length; i++) {
      result += sequence[i];
    }
    return result;
  } else {
    return -1;
  }
}
// 결과 출력
console.log(solve());
