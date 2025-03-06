function solution(n, computers) {
    const graph = Array.from({length: n}, () => []);
    const visited = Array(n).fill(false);
    let answer = 0;
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(i !== j && computers[i][j] === 1) graph[i].push(j);
        }
    }
    
    const dfs = (idx) => {
        visited[idx] = true;
        for(let i = 0; i < graph[idx].length; i++) {
            if(!visited[graph[idx][i]]) {
                dfs(graph[idx][i]);
            }
        }
    }
    
    for(let i = 0; i < n; i++) {
        if(!visited[i]) {
            dfs(i);
            answer++;
        }
    }
    
    return answer;
}