const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    // 입력 검증
    if (input.length < 2) {
        return "0\n0";
    }

    const lines = input.filter(line => line.trim() !== '');
    const [N, M] = lines[0].split(' ').map(Number);

    const money = Array.from({ length: M + 1 }, () => Array(N + 1).fill(0));
    
    // 안전한 입력 파싱
    for (let i = 1; i < lines.length; i++) {
        const temp = lines[i].split(' ').map(Number);
        if (temp.length > 0 && temp[0] >= 0 && temp[0] <= N) {
            for (let j = 1; j < temp.length && j <= M; j++) {
                money[j][temp[0]] = temp[j] || 0;
            }
        }
    }

    const dp = Array.from({ length: M + 1 }, () => Array(N + 1).fill(0));
    const path = Array.from({ length: M + 1 }, () => Array(N + 1).fill(0));

    for (let i = 1; i <= M; i++) {
        for (let j = 1; j <= N; j++) {
            for (let k = 0; k <= j; k++) {
                const temp = dp[i - 1][j - k] + money[i][k];
                if (dp[i][j] < temp) {
                    dp[i][j] = temp;
                    path[i][j] = k;
                }
            }
        }
    }

    let company = M;
    let total = N;
    const result = [];
    while (company > 0) {
        const invest = path[company][total];
        result.push(invest);
        total -= invest;
        company--;
    }
    result.reverse();

    return [dp[M][N], result.join(' ')].join('\n');
}
// 결과 출력
const result = solve();
console.log(result);