const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const it = input.values();
    const [N, M] = it.next().value.split(' ').map(Number);

    let cur = it.next();
    const sum = [0];
    let temp = 0;
    while (!cur.done) {
        temp += +cur.value;
        sum.push(temp);
        cur = it.next();
    }

    const dp = Array.from({ length: N + 1 }, () => Array(M + 1).fill(-Infinity));

    dp[1][1] = sum[1];
    for (let i = 2; i <= N; i++) {
        dp[i][1] = dp[i - 1][1];

        for (let j = 0; j <= i - 1; j++) {
            dp[i][1] = Math.max(dp[i][1], sum[i] - sum[j]);
        }
    }

    for (let i = 3; i <= N; i++) {
        for (let j = 2; j <= M; j++) {
            dp[i][j] = dp[i - 1][j];

            for (let k = 1; k <= i - 2; k++) {
                dp[i][j] = Math.max(dp[i][j], dp[k][j - 1] + sum[i] - sum[k + 1]);
            }
        }
    }

    return dp[N][M];
}
// 결과 출력
const result = solve();
console.log(result);