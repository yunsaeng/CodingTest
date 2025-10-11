const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const it = input.values();
    const [n, m] = it.next().value.split(' ').map(Number);

    const arr = [];
    for (let i = 0; i < n; i++) arr.push(+it.next().value);

    const dp = Array.from({ length: n }, () => Array(m + 2).fill(-1));
    const dfs = (idx, cnt) => {
        if (idx === n) return 0;
        if (dp[idx][cnt] !== -1) return dp[idx][cnt];

        const rest = m - cnt + 1;

        dp[idx][cnt] = dfs(idx + 1, arr[idx] + 1) + Math.pow(rest, 2);
        
        if (cnt + arr[idx] <= m) dp[idx][cnt] = Math.min(dp[idx][cnt], dfs(idx + 1, cnt + arr[idx] + 1));

        return dp[idx][cnt];
    }

    return dfs(0, 0);
}
// 결과 출력
const result = solve();
console.log(result);