const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const it = input.values();
    const T = it.next().value;

    let result = [];
    let cur = it.next();
    while (!cur.done) {
        const N = +cur.value;

        cur = it.next();
        const cards = cur.value.split(' ').map(Number);

        const dp = Array.from({ length: N }, () => Array(N).fill(0));
        const game = (left, right, turn) => {
            if (left > right) return 0;
            if (dp[left][right]) return dp[left][right];

            if (turn % 2 === 0) {
                dp[left][right] = Math.max(game(left + 1, right, turn + 1) + cards[left], game(left, right - 1, turn + 1) + cards[right]);
            } else {
                dp[left][right] = Math.min(game(left + 1, right, turn + 1), game(left, right - 1, turn + 1));
            }

            return dp[left][right];
        }

        result.push(game(0, N - 1, 0));

        cur = it.next();
    }

    return result.join('\n');
}

// 결과 출력
const result = solve();
console.log(result);