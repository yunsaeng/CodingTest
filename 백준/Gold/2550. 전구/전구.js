const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const it = input.values();
    const N = +it.next().value;
    const arr = it.next().value.split(' ').map(Number);
    const temp = it.next().value.split(' ').map(Number);

    const sequence = Array(N + 1).fill(0);
    for (let i = 0; i < N; i++) sequence[temp[i]] = i;

    // LIS를 만들기 위한 새로운 배열 생성
    const newArr = arr.map(val => sequence[val]);

    const dp = Array(N).fill(1);
    const path = Array(N).fill(-1); // 1차원 배열로 변경 (O(N) 공간)
    let maxLen = 0;
    let lastIndex = -1;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < i; j++) {
            if (newArr[j] < newArr[i] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
                path[i] = j; // 현재 인덱스 i의 이전 요소는 인덱스 j에 있었음을 기록
            }
        }
        if (maxLen < dp[i]) {
            maxLen = dp[i];
            lastIndex = i; // 최대 길이를 만드는 마지막 요소의 인덱스를 저장
        }
    }

    const lights = [];
    // lastIndex부터 path를 역추적
    while (lastIndex !== -1) {
        lights.push(arr[lastIndex]);
        lastIndex = path[lastIndex];
    }

    return [maxLen, lights.sort((a, b) => a - b).join(" ")].join('\n');
}
// 결과 출력
const result = solve();
console.log(result);