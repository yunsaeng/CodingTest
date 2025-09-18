const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const it = input.values();
    const N = +it.next().value;

    let cur = it.next();
    const arr = [];
    while (!cur.done) {
        arr.push(cur.value.split('').map(Number));
        cur = it.next();
    }

    const dp = Array.from({ length: N }, () => 
        Array.from({ length: 1 << N }, () => Array(10).fill(-1))
    );
    
    const dfs = (person, visited, lastCost) => {
        if (visited === (1 << N) - 1) return 0;

        if (dp[person][visited][lastCost] !== -1) return dp[person][visited][lastCost];

        dp[person][visited][lastCost] = 0;
        for (let i = 0; i < N; i++) {
            if (i === person) continue; // 자신은 건너뛰기
            if (arr[person][i] < lastCost || (visited & (1 << i))) continue;
            dp[person][visited][lastCost] = Math.max(
                dp[person][visited][lastCost], 
                dfs(i, visited | (1 << i), arr[person][i]) + 1
            );
        }

        return dp[person][visited][lastCost];
    }

    return dfs(0, 1, 0) + 1;
}
// 결과 출력
const result = solve();
console.log(result);