const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const it = input.values();
    const N = +it.next().value;
    const MOD = 1000000000;
    const dp = Array(N+1).fill(0);
    dp[1] = 0;
    dp[2] = 1;
    for(let i = 3; i <= N; i++) {
        dp[i] = (i - 1) * (dp[i-1] + dp[i-2]) % MOD;
    }
    return dp[N];
}

// 결과 출력
const result = solve();
console.log(result);