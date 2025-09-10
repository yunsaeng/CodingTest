const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const it = input.values();
    const [N, M, K] = it.next().value.split(" ").map(Number);
    const candy = it.next().value.split(" ").map(Number);
    const graph = Array.from({ length: N }, () => []);
    
    let cur = it.next();
    while (!cur.done) {
        const [u, v] = cur.value.split(" ").map(Number);
        graph[u - 1].push(v - 1);
        graph[v - 1].push(u - 1);
        cur = it.next();
    }

    const visited = Array(N).fill(false);
    const groups = []; // [아이 수, 사탕 총합] 배열

    // BFS로 연결된 그룹 찾기
    const bfs = node => {
        const queue = [node];
        visited[node] = true;
        let candySum = 0;
        let childCount = 0;

        while (queue.length) {
            const cur = queue.shift();
            candySum += candy[cur];
            childCount++;
            for (const next of graph[cur]) {
                if (!visited[next]) {
                    visited[next] = true;
                    queue.push(next);
                }
            }
        }

        groups.push([childCount, candySum]);
    }

    // 모든 그룹 찾기
    for(let i = 0; i < N; i++) {
        if(!visited[i]) {
            bfs(i);
        }
    }

    // 0-1 배낭 문제 해결 (K-1명 이하에서 최대값 구하기)
    const dp = Array(K).fill(0);
    
    for (const [children, candies] of groups) {
        // 역순으로 순회하여 중복 선택 방지
        for (let k = K - 1; k >= children; k--) {
            dp[k] = Math.max(dp[k], dp[k - children] + candies);
        }
    }

    // K-1명 이하에서 최대값 찾기
    return Math.max(...dp);
}

// 결과 출력
const result = solve();
console.log(result);