const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const it = input.values();
    const N = +it.next().value;

    const MOD = 987654321n;
    const dp = Array(N + 1).fill(0n);
    dp[0] = 1n;
    dp[2] = 1n;

    for (let i = 4; i <= N; i+=2) {
        for (let j = 2; j <= i; j+=2) {
            dp[i] = (dp[i] + (dp[j - 2] * dp[i - j]) % MOD) % MOD;
        }
    }
    return dp[N].toString();
}
// 결과 출력
const result = solve();
console.log(result);