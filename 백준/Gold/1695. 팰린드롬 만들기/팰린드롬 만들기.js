const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const it = input.values();
    const N = +it.next().value;
    const sequence = it.next().value.split(' ').map(Number);

    const dp = Array.from({ length: N }, () => Array(N).fill(-1));
    const dfs = (left, right) => {
        if (left >= right) return 0;
        if (dp[left][right] !== -1) return dp[left][right];

        if (sequence[left] === sequence[right]) dp[left][right] = dfs(left + 1, right - 1);
        else dp[left][right] = Math.min(dfs(left + 1, right) + 1, dfs(left, right - 1) + 1);

        return dp[left][right];
    };

    return dfs(0, N - 1);
}
// 결과 출력
const result = solve();
console.log(result);