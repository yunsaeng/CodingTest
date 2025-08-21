const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const [N, M, K] = input[0].split(' ').map(Number);
    
    const totalCombinations = combination(N + M, N);
    
    if (K > totalCombinations) return -1;
    return generateKthString(N, M, K);
}

function combination(n, r) {
    if (r > n || r < 0) return 0;
    if (r === 0 || r === n) return 1;
    
    let result = 1;
    for (let i = 0; i < r; i++) {
        result = result * (n - i) / (i + 1);
    }
    return Math.floor(result);
}

function generateKthString(N, M, K) {
    let result = '';
    let remainingA = N;
    let remainingZ = M;
    let currentK = K;
    
    for (let pos = 0; pos < N + M; pos++) {
        if (remainingA === 0) {
            result += 'z'.repeat(remainingZ);
            break;
        }
        if (remainingZ === 0) {
            result += 'a'.repeat(remainingA);
            break;
        }
        
        const casesWithA = combination(remainingA + remainingZ - 1, remainingA - 1);
        
        if (currentK <= casesWithA) {
            result += 'a';
            remainingA--;
        } else {
            result += 'z';
            currentK -= casesWithA;
            remainingZ--;
        }
    }
    
    return result;
}

// 결과 출력
const result = solve();
console.log(result);