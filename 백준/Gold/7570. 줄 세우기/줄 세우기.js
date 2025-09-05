const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const it = input.values();
    const N = +it.next().value;
    const lines = it.next().value.split(' ').map(Number);
    const dp = Array(N + 1).fill(0);

    let result = 0;
    for (const num of lines) {
        dp[num] = dp[num - 1] + 1;
        result = Math.max(result, dp[num]);
    }

    return N - result;
}

// 결과 출력
const result = solve();
console.log(result);