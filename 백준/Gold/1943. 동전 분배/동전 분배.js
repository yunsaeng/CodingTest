const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const it = input.values();
    let cur = it.next();
    const result = [];

    while (!cur.done) {
        const N = +cur.value;
        const arr = [];
        let total = 0;
        for (let i = 0; i < N; i++) {
            const v = it.next().value.split(' ').map(Number);
            arr.push(v);
            total += v[0] * v[1];
        }
        cur = it.next();

        if (total % 2 === 1) {
            result.push(0);
            continue;
        }

        const target = total / 2;

        let dp = Array.from({ length: arr.length + 1 }, () => Array(target + 1).fill(false));
        dp[0][0] = true;

        for (let i = 1; i <= arr.length; i++) {
            const [cost, count] = arr[i - 1];
            for (let j = 0; j <= target; j++) {
                if (dp[i - 1][j]) {
                    for (let k = 0; k <= count; k++) {
                        const temp = j + cost * k;
                        if (temp <= target) dp[i][temp] = true;
                    }
                }
            }
        }

        result.push(dp[arr.length][target] ? 1 : 0);
    }
    return result.join('\n');
}
// 결과 출력
const result = solve();
console.log(result);