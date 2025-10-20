const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const it = input.values();
    const [N, M] = it.next().value.split(' ').map(Number);

    const holidays = Array(N + 1).fill(false);
    // M=0일 때 입력 처리 문제 해결
    if (M > 0) {
        it.next().value.split(" ").map(Number).forEach(holiday => holidays[holiday] = true);
    }
    const dp = Array.from({ length: N + 1 }, () => Array(100).fill(Infinity));

    const dfs = (day, tickets) => {
        if (day > N) return 0;
        if (dp[day][tickets] !== Infinity) return dp[day][tickets];

        if (holidays[day]) {
            dp[day][tickets] = dfs(day + 1, tickets);
            return dp[day][tickets];
        }

        dp[day][tickets] = Math.min(dp[day][tickets], dfs(day + 1, tickets) + 10000, dfs(day + 3, tickets + 1) + 25000, dfs(day + 5, tickets + 2) + 37000);
        if (tickets >= 3) dp[day][tickets] = Math.min(dp[day][tickets], dfs(day + 1, tickets - 3));
        return dp[day][tickets];
    };

    return dfs(1, 0);
}
// 결과 출력
const result = solve();
console.log(result);