const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직 - 편집 거리 (Edit Distance)
function solve() {
    const it = input.values();
    const a = it.next().value;
    const b = it.next().value;

    const m = a.length;
    const n = b.length;
    
    // dp[i][j] = a의 첫 i개 문자를 b의 첫 j개 문자로 변환하는 최소 편집 횟수
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    
    // 초기화: 빈 문자열로 변환하는 경우
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;  // a의 i개 문자를 빈 문자열로 만들려면 i번 삭제
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;  // 빈 문자열을 b의 j개 문자로 만들려면 j번 삽입
    }
    
    // 편집 거리 계산
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (a[i - 1] === b[j - 1]) {
                // 문자가 같으면 변경할 필요 없음
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                // 문자가 다르면 3가지 연산 중 최소값 선택
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1,     // 삭제: a[i-1] 삭제
                    dp[i][j - 1] + 1,     // 삽입: b[j-1] 삽입
                    dp[i - 1][j - 1] + 1  // 교체: a[i-1]을 b[j-1]로 교체
                );
            }
        }
    }
    
    return dp[m][n];
}
// 결과 출력
const result = solve();
console.log(result);