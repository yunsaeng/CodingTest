const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const it = input.values();
    const [N, M] = it.next().value.split(' ').map(Number);

    const board = [];
    let cur = it.next();
    while (!cur.done) {
        board.push(cur.value.split(''));
        cur = it.next();
    }

    const dir = { L: [0, -1], R: [0, 1], U: [-1, 0], D: [1, 0] };
    const dp = Array.from({ length: N }, () => Array(M).fill(-1));

    const dfs = (x, y) => {
        if (x < 0 || x >= N || y < 0 || y >= M) return 1;

        if (dp[x][y] !== -1) return dp[x][y];

        dp[x][y] = 0;
        const [dx, dy] = dir[board[x][y]];
        dp[x][y] += dfs(x + dx, y + dy);
        return dp[x][y];
    }

    let result = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            result += dfs(i, j);
        }
    }

    return result;
}
// 결과 출력
const result = solve();
console.log(result);