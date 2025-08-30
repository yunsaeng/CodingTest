const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const [N, M] = input[0].split(" ").map(Number);
    const board = input.slice(1, 1 + N).map(row =>
        row.trim().split("").map(ch => (ch === 'H' ? -1 : Number(ch)))
    );

    const dr = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const dp = Array.from({ length: N }, () => Array(M).fill(-1));
    const visited = Array.from({ length: N }, () => Array(M).fill(false));
    const inrange = (x, y) => 0 <= x && x < N && 0 <= y && y < M;

    const dfs = (x, y) => {
        if (!inrange(x, y) || board[x][y] === -1) return 0;

        if (visited[x][y]) return Infinity;

        if (dp[x][y] !== -1) return dp[x][y];

        visited[x][y] = true;
        const k = board[x][y];
        for (const [dx, dy] of dr) {
            const nx = x + k * dx;
            const ny = y + k * dy;
            dp[x][y] = Math.max(dp[x][y], dfs(nx, ny) + 1);
        }
        visited[x][y] = false;

        return dp[x][y];
    }

    const result = dfs(0, 0);
    return result === Infinity ? -1 : result;
}

// 결과 출력
const result = solve();
console.log(result);