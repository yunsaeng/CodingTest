const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const it = input.values();
    const N = +it.next().value;
    const W = it.next().value.trim().split(" ").map(Number);

    const graph = Array.from({ length: N }, () => []);
    for (let cur = it.next(); !cur.done; cur = it.next()) {
        const [u, v] = cur.value.split(" ").map(Number);
        graph[u - 1].push(v - 1);
        graph[v - 1].push(u - 1);
    }

    // dp[node][0 or 1] = node를 선택(1) or 미선택(0)했을 때의 최대 가중치
    const dp = Array.from({ length: N }, () => [-1, -1]);

    const dfs = (node, parent, take) => {
        if (dp[node][take] !== -1) return dp[node][take];

        let sum = take ? W[node] : 0;
        for (const next of graph[node]) {
            if (next === parent) continue;

            if (take) sum += dfs(next, node, 0);
            else sum += Math.max(dfs(next, node, 0), dfs(next, node, 1));
        }
        return dp[node][take] = sum;
    };

    const chosen = [];
    const trace = (node, parent, parentTaken) => {
        // 현재 노드 선택 여부 결정
        let takeCurrent = false;
        if (parentTaken) {
            takeCurrent = false; // 부모가 선택되면 현재는 선택 불가
        } else {
            takeCurrent = (dfs(node, parent, 1) >= dfs(node, parent, 0)); // tie시 선택하는 일관 규칙
        }

        if (takeCurrent) chosen.push(node + 1);

        for (const next of graph[node]) {
            if (next === parent) continue;
            trace(next, node, takeCurrent);
        }
    };

    // 루트에서 시작
    trace(0, -1, false);

    // 출력 정렬
    chosen.sort((a, b) => a - b);
    return [Math.max(dfs(0, -1, 0), dfs(0, -1, 1)), chosen.join(" ")].join("\n");
}

// 결과 출력
const result = solve();
console.log(result);