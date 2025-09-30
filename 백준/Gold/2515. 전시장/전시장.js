const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const it = input.values();
    const [N, S] = it.next().value.split(' ').map(Number);

    const arr = [];
    for (let i = 0; i < N; i++) {
        const [H, C] = it.next().value.split(' ').map(Number);
        arr.push({ H, C });
    }

    arr.sort((a, b) => a.H - b.H);

    const dp = Array(N + 1).fill(0);

    const findIdx = idx => {
        let left = 0;
        let right = idx;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid].H <= arr[idx].H - S) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return left;
    }

    for (let i = 1; i <= N; i++) {
        const idx = findIdx(i - 1);
        dp[i] = Math.max(dp[i - 1], dp[idx] + arr[i - 1].C);
    }

    return dp[N];
}
// 결과 출력
const result = solve();
console.log(result);