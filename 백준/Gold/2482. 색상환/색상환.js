const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const MOD = 1000000003;
    const N = +input[0];
    const K = +input[1];
    const dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));

    for (let n = 0; n <= N; n++) {
        dp[n][0] = 1;
        dp[n][1] = n;
    }

    for (let n = 2; n <= N; n++) {
        for (let k = 2; k <= K; k++) {
            dp[n][k] = (dp[n - 2][k - 1] + dp[n - 1][k]) % MOD;
        }
    }

    return (dp[N - 3][K - 1] + dp[N - 1][K]) % MOD;
}

// 결과 출력
const result = solve();
console.log(result);