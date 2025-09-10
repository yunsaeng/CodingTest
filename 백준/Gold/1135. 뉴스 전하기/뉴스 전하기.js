const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const it = input.values();
    const N = +it.next().value;
    const arr = it.next().value.split(' ').map(Number);
    const tree = Array.from({ length: N }, () => []);
    for (let i = 0; i < N; i++) {
        const num = arr[i];
        if (num === -1) continue;
        tree[num].push(i);
    }

    const dp = Array(N).fill(-1);

    const dfs = node => {
        if (dp[node] !== -1) return dp[node];
        
        // 부하 직원이 없으면 0분
        if (tree[node].length === 0) {
            return dp[node] = 0;
        }
        
        // 각 부하 직원의 전파 시간을 구하고 정렬
        const childTimes = tree[node].map(child => dfs(child));
        childTimes.sort((a, b) => b - a); // 내림차순 정렬
        
        // 순차적으로 전파하는 최소 시간 계산
        let maxTime = 0;
        for (let i = 0; i < childTimes.length; i++) {
            // i번째 부하에게 전파하는 시간 = i + 1 + childTimes[i]
            // (i+1분 후에 전파 시작, childTimes[i]분 동안 전파)
            maxTime = Math.max(maxTime, i + 1 + childTimes[i]);
        }
        
        return dp[node] = maxTime;
    }

    return dfs(0);
}

// 결과 출력
const result = solve();
console.log(result);