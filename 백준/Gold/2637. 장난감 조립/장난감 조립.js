const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const it = input.values();
    const N = +it.next().value;
    const M = +it.next().value;

    const graph = Array.from({ length: N + 1 }, () => []);
    const inDegree = Array(N + 1).fill(0);

    for (let i = 0; i < M; i++) {
        const [u, v, k] = it.next().value.split(" ").map(Number);
        graph[v].push([u, k]);
        inDegree[u]++;
    }

    const queue = [];
    const dp = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
    for (let i = 1; i <= N; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
            dp[i][i] = 1;
        }
    }

    while (queue.length) {
        const node = queue.shift();
        for (const [next, nextCount] of graph[node]) {
            inDegree[next]--;
            for (let i = 1; i <= N; i++) {
                dp[next][i] += dp[node][i] * nextCount;
            }
            if (inDegree[next] === 0) queue.push(next);
        }
    }

    const result = [];
    for (let i = 1; i <= N; i++) {
        if (dp[N][i] !== 0) result.push(`${i} ${dp[N][i]}`);
    }
    return result.join("\n");
}

// 결과 출력
const result = solve();
console.log(result);