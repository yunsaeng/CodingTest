function solution(n, vertex) {
    const graph = Array.from({length: n}, () => []);
    for(const [from, to] of vertex) {
        graph[from - 1].push(to - 1);
        graph[to - 1].push(from - 1);
    }
    
    const visited = Array(n).fill(false);
    visited[0] = true;
    const queue = [[0, 0]];
    let max = 0;
    const answer = [];
    
    while(queue.length) {
        const [node, dist] = queue.shift();
        
        for(const next of graph[node]) {
            if(!visited[next]) {
                queue.push([next, dist + 1]);
                visited[next] = true;
            }
        }
        
        max = Math.max(max, dist);
        answer.push([node, dist]);
    }
    
    return answer.filter((e) => e[1] === max).length;
}