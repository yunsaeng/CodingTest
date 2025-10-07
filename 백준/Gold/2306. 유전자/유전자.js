const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const it = input.values();
    const DNA = it.next().value;
    
    const dp = Array.from({ length: DNA.length }, () => Array(DNA.length).fill(-1));

    const dfs = (l, r) => {
        if (l >= r) return dp[l][r] = 0;

        if (dp[l][r] !== -1) return dp[l][r];

        if ((DNA[l] === "a" && DNA[r] === "t") || (DNA[l] === "g" && DNA[r] === "c")) dp[l][r] = dfs(l + 1, r - 1) + 2;

        for (let k = l; k < r; k++) dp[l][r] = Math.max(dp[l][r], dfs(l, k) + dfs(k + 1, r));

        return dp[l][r];
    }

    return dfs(0, DNA.length - 1);
}
// 결과 출력
const result = solve();
console.log(result);