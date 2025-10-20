const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const it = input.values();
    const T = +it.next().value;
    let cur = it.next();

    const dp = Array(101).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= 100; i++) {
        dp[i] = dp[i - 1] + 1;
        if (i >= 10) dp[i] = Math.min(dp[i], dp[i - 10] + 1);
        if (i >= 25) dp[i] = Math.min(dp[i], dp[i - 25] + 1);
    }

    const result = [];
    for (let i = 0; i < T; i++) {
        let price = +cur.value;

        let coins = 0;
        while (price > 0) {
            const temp = price % 100;
            coins += dp[temp];
            price = Math.floor(price / 100);
        }
        result.push(coins);

        cur = it.next();
    }

    return result.join('\n');
}
// 결과 출력
console.log(solve());