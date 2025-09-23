const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const it = input.values();
    const k = +it.next().value;
    const tree = [0, 0, ...it.next().value.split(' ').map(Number)];
    const treeSize = 1 << (k + 1);

    let result = 0;
    const dfs = node => {
        if (node * 2 >= treeSize) {
            result += tree[node];
            return tree[node];
        }

        const left = dfs(node * 2);
        const right = dfs(node * 2 + 1);
        result += Math.abs(left - right) + tree[node]; 
        return Math.max(left, right) + tree[node];
    };

    dfs(1);
    return result;
}
// 결과 출력
const result = solve();
console.log(result);