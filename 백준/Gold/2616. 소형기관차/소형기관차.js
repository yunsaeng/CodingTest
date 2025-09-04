const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const it = input.values();
    const N = +it.next().value;
    const coach = [0, ...it.next().value.split(' ').map(Number)];
    const M = +it.next().value;

    const dp = Array.from({ length: 4 }, () => Array(N + 1).fill(0));
    const sum = Array(N + 1).fill(0);
    for (let i = 1; i <= N; i++) {
        sum[i] = sum[i - 1] + coach[i];
    }

    for (let i = 1; i <= 3; i++) {
        for (let j = M; j <= N; j++) {
            dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j - M] + sum[j] - sum[j - M]);
        }
    }

    return dp[3][N];
}

// 결과 출력
const result = solve();
console.log(result);