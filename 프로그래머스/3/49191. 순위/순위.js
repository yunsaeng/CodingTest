function solution(n, results) {
    const graph = Array.from({length: n}, () => Array(n).fill(0));
    
    results.forEach(([winner, loser]) => {
        graph[winner - 1][loser - 1] = 1;
        graph[loser - 1][winner - 1] = -1;
    })
    
    // 플로이드-워셜 알고리즘
    for(let mid = 0; mid < n; mid++) {
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < n; j++) {
                if(graph[i][mid] === 1 && graph[mid][j] === 1) graph[i][j] = 1;
                if(graph[i][mid] === -1 && graph[mid][j] === -1) graph[i][j] = -1;
            }
        }
    }
    
    let answer = 0;
    for(let i = 0; i < n; i++) {
        let cnt = 0;
        for(let j = 0; j < n; j++) {
            if(graph[i][j] !== 0) cnt++;
        }
        if(cnt === n - 1) answer++;
    }
    
    return answer;
}