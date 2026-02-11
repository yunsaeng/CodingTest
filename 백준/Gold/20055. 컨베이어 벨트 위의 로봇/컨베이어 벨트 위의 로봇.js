const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const it = input.values();
  const [N, K] = it.next().value.split(" ").map(Number);
  const A = it.next().value.split(" ").map(Number);
  const len = 2 * N;
  const hasRobot = Array(len).fill(false);

  let broken = 0;
  for (const cur of A) if (cur === 0) broken++;

  let up = 0;
  let result = 0;
  while (broken < K) {
    // 벨트가 각 칸 위에 있는 로봇과 함께 한 칸 회전한다.
    up--;
    if (up < 0) up = len - 1;
    const down = (up + N - 1) % len;
    if (hasRobot[down]) hasRobot[down] = false;

    // 가장 먼저 벨트에 올라간 로봇부터, 벨트가 회전하는 방향으로 한 칸 이동할 수 있다면 이동한다. 만약 이동할 수 없다면 가만히 있는다.
    // 로봇이 이동하기 위해서는 이동하려는 칸에 로봇이 없으며, 그 칸의 내구도가 1 이상 남아 있어야 한다.
    for (let dist = N - 2; dist >= 0; dist--) {
      const cur = (up + dist) % len;
      const next = (cur + 1) % len;

      if (hasRobot[cur] && !hasRobot[next] && A[next] !== 0) {
        hasRobot[cur] = false;
        hasRobot[next] = true;
        A[next]--;
        if (A[next] === 0) broken++;

        if (next === down) hasRobot[next] = false;
      }
    }

    // 올리는 위치에 있는 칸의 내구도가 0이 아니면 올리는 위치에 로봇을 올린다.
    if (A[up] !== 0) {
      hasRobot[up] = true;
      A[up]--;
      if (A[up] === 0) broken++;
    }

    result++;
  }

  return result;
}

console.log(solve());