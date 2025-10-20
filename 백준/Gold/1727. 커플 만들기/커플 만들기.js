const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const it = input.values();
    const [n, m] = it.next().value.split(' ').map(Number);
    const men = it.next().value.split(' ').map(Number).sort((a, b) => a - b);
    const women = it.next().value.split(' ').map(Number).sort((a, b) => a - b);

    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (i === j) dp[i][j] = dp[i - 1][j - 1] + Math.abs(men[i - 1] - women[j - 1]);
            else if (i > j) dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1] + Math.abs(men[i - 1] - women[j - 1]));
            else dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j - 1] + Math.abs(men[i - 1] - women[j - 1]));
        }
    }

    return dp[n][m];
}
// 결과 출력
console.log(solve());