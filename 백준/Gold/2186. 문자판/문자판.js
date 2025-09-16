const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const it = input.values();
    const [N, M, K] = it.next().value.split(' ').map(Number);

    const board = [];
    let cur = it.next();
    for (let i = 0; i < N; i++) {
        board.push(cur.value.split(""));
        cur = it.next();
    }
    const word = cur.value.split("");

    const dp = Array.from({ length: N }, () => Array.from({ length: M }, () => Array(word.length).fill(-1)));
    const dfs = (n, m, cnt) => {
        if (cnt === word.length - 1) return dp[n][m][cnt] = 1;
        if (dp[n][m][cnt] !== -1) return dp[n][m][cnt];

        const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        dp[n][m][cnt] = 0;
        for (const [dx, dy] of dir) {
            for (let i = 1; i <= K; i++) {
                const x = n + dx * i;
                const y = m + dy * i;
                if (x < 0 || x >= N || y < 0 || y >= M) continue;
                if (board[x][y] !== word[cnt + 1]) continue;
                dp[n][m][cnt] += dfs(x, y, cnt + 1);
            }
        }

        return dp[n][m][cnt];
    };

    let result = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (board[i][j] === word[0]) {
                result += dfs(i, j, 0);
            }
        }
    }

    return result;
}
// 결과 출력
const result = solve();
console.log(result);