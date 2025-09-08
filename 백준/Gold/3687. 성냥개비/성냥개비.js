const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const it = input.values();
    const testCase = +it.next().value;
    
    // DP 배열 초기화
    const minDp = Array(101).fill(null);
    minDp[2] = "1"; minDp[3] = "7"; minDp[4] = "4";
    minDp[5] = "2"; minDp[6] = "6"; minDp[7] = "8";
    
    // 숫자 비교 함수
    const isSmaller = (a, b) => a.length < b.length || (a.length === b.length && a < b);
    
    // DP 계산
    for (let i = 8; i <= 100; i++) {
        minDp[i] = "9999999999999999999999";
        
        // 일반 조합
        for (let j = 2; j <= 7; j++) {
            if (i - j >= 2 && minDp[i - j]) {
                const newNum = minDp[i - j] + minDp[j];
                if (newNum[0] !== '0' && isSmaller(newNum, minDp[i])) {
                    minDp[i] = newNum;
                }
            }
        }
        
        // 0 사용 케이스
        if (i >= 6) {
            const zeroNum = minDp[i - 6] + "0";
            if (zeroNum[0] !== '0' && isSmaller(zeroNum, minDp[i])) {
                minDp[i] = zeroNum;
            }
        }
    }
    
    // 결과 생성
    const result = [];
    for (let i = 0; i < testCase; i++) {
        const N = +it.next().value;
        const minNum = minDp[N];
        const maxNum = N % 2 === 0 ? "1".repeat(N / 2) : "7" + "1".repeat((N - 3) / 2);
        result.push(`${minNum} ${maxNum}`);
    }
    
    return result.join('\n');
}

// 결과 출력
const result = solve();
console.log(result);