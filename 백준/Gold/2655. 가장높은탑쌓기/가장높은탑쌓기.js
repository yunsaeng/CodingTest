const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const it = input.values();
    const N = +it.next().value;

    const bricks = [];
    let cur = it.next();
    for (let i = 0; i < N; i++) {
        const [width, height, weight] = cur.value.split(' ').map(Number);
        bricks.push([width, height, weight, i + 1]); // [넓이, 높이, 무게, 원래번호]
        cur = it.next();
    }
    
    // 넓이 내림차순으로 정렬
    bricks.sort((a, b) => b[0] - a[0]);

    const dp = Array(N).fill(0); // 각 벽돌을 마지막으로 사용했을 때의 최대 높이
    const prev = Array(N).fill(-1); // 이전 벽돌 인덱스
    let maxHeight = 0;
    let maxIndex = 0;

    for (let i = 0; i < N; i++) {
        dp[i] = bricks[i][1]; // 현재 벽돌의 높이로 초기화
        
        for (let j = 0; j < i; j++) {
            // 아래 벽돌의 넓이와 무게가 모두 위 벽돌보다 커야 함
            if (bricks[j][0] > bricks[i][0] && bricks[j][2] > bricks[i][2]) {
                if (dp[i] < dp[j] + bricks[i][1]) {
                    dp[i] = dp[j] + bricks[i][1];
                    prev[i] = j;
                }
            }
        }
        
        if (maxHeight < dp[i]) {
            maxHeight = dp[i];
            maxIndex = i;
        }
    }

    // 경로 역추적
    const result = [];
    let current = maxIndex;
    while (current !== -1) {
        result.push(bricks[current][3]); // 원래 번호
        current = prev[current];
    }

    return [result.length, ...result].join('\n');
}
// 결과 출력
const result = solve();
console.log(result);