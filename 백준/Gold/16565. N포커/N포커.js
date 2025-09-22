const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직 - 편집 거리 (Edit Distance)
function solve() {
    const it = input.values();
    const N = it.next().value;
    const MOD = 10007;

    const comb = Array.from({ length: 53 }, () => Array(53).fill(0));
    for (let i = 0; i < 53; i++) {
        comb[i][0] = 1;
        comb[i][i] = 1;
    }

    for (let i = 1; i < 53; i++) {
        for (let j = 1; j < 53; j++) {
            comb[i][j] = comb[i - 1][j - 1] + comb[i - 1][j];
        }
    }

    let result = 0;
    for (let i = 1; i <= 13 && N - (4 * i) >= 0; i++) {
        if (i % 2 === 1) result = (result + comb[52 - (4 * i)][N - (4 * i)] * comb[13][i]) % MOD;
        else result = (result - (comb[52 - (4 * i)][N - (4 * i)] * comb[13][i]) % MOD + MOD) % MOD;
    }

    return result;
}
// 결과 출력
const result = solve();
console.log(result);