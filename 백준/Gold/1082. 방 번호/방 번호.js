const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const it = input.values();
    const N = +it.next().value;
    const price = it.next().value.split(' ').map(Number);
    const M = +it.next().value;

    const dp = Array(M + 1).fill(0n);

    for(let i = N - 1; i >= 0; i--) {
        for(let j = price[i]; j <= M; j++) {
            dp[j] = dp[j] > BigInt(i) ? dp[j] : BigInt(i);
            dp[j] = dp[j] > (dp[j - price[i]] * 10n + BigInt(i)) ? dp[j] : (dp[j - price[i]] * 10n + BigInt(i));
        }
    }

    return dp[M].toString();
}
// 결과 출력
const result = solve();
console.log(result);