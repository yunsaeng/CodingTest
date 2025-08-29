const fs = require('fs');

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 문제 해결 로직
function solve() {
    const N = +input[0];
    const population = input[1].split(" ").map(Number);
  
    const graph = Array.from({ length: N }, () => []);
    input.slice(2).forEach(line => {
        const [to, from] = line.split(" ").map(Number);
        graph[to - 1].push(from - 1);
        graph[from - 1].push(to - 1);
    });
  
    const dp = Array.from({ length: N }, () => Array(2).fill(-1));
  
    const dfs = (node, parent, isBest) => {
      if (dp[node][isBest] !== -1) return dp[node][isBest];
  
      let result = isBest ? population[node] : 0;
  
      for (const next of graph[node]) {
        if (next === parent) continue;
  
        if (isBest) result += dfs(next, node, 0);
        else result += Math.max(dfs(next, node, 0), dfs(next, node, 1));
      }
  
      return (dp[node][isBest] = result);
    };
  
    return Math.max(dfs(0, -1, 0), dfs(0, -1, 1));
  }

// 결과 출력
const result = solve();
console.log(result);