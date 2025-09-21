const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직 - 편집 거리 (Edit Distance)
function solve() {
    const dp = Array(23).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 5;
    for (let i = 3; i <= 22; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] * 4;
        for (let j = i - 3; j >= 0; j--) {
            if ((i - j) % 2) dp[i] += dp[j] * 2;
            else dp[i] += dp[j] * 3;
        }
    }

    const it = input.values();
    const tc = it.next().value;
    let cur = it.next();

    const result = []
    for (let i = 0; i < tc; i++) {
        result.push(dp[cur.value]);
        cur = it.next();
    }
    return result.join('\n');
}
// 결과 출력
const result = solve();
console.log(result);