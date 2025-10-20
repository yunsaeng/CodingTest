const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const it = input.values();
    const [a, b, d, N] = it.next().value.split(' ').map(Number);
    const MOD = 1000;

    // dp[day] = day일째에 살아있는 짚신벌레의 수
    const dp = Array(N + 1).fill(0);
    // birth[day] = day일째에 태어난 짚신벌레의 수
    const birth = Array(N + 1).fill(0);
    // 누적합 배열
    const prefixSum = Array(N + 1).fill(0);
    
    // 초기 개체 1마리
    birth[0] = 1;
    dp[0] = 1;
    prefixSum[0] = birth[0];

    for (let day = 1; day <= N; day++) {
        // 오늘 태어난 개체 수 계산 (누적합 사용)
        let newBirth = 0;
        if (day >= a) {
            const start = Math.max(0, day - b + 1);
            const end = day - a;
            if (start <= end) {
                newBirth = prefixSum[end] - (start > 0 ? prefixSum[start - 1] : 0);
            }
        }
        birth[day] = newBirth % MOD;
        prefixSum[day] = (prefixSum[day - 1] + birth[day]) % MOD;

        // 오늘 살아있는 개체 수 = 어제 살아있던 수 + 오늘 태어난 수 - 오늘 죽은 수
        dp[day] = dp[day - 1] + birth[day];
        
        // d일 전에 태어난 개체들은 죽음
        if (day >= d) {
            dp[day] -= birth[day - d];
        }
        
        dp[day] = dp[day] % MOD;
        if (dp[day] < 0) dp[day] += MOD;
    }

    return dp[N];
}
// 결과 출력
console.log(solve());