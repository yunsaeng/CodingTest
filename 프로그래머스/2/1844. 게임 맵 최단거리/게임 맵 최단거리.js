function solution(maps) {
    const [endRow, endCol] = [maps.length - 1, maps[0].length - 1];
    const queue = [[0, 0, 1]];
    const visited = Array.from({length: endRow + 1}, () => Array(endCol + 1).fill(false));
    const dirRow = [-1, 0, 1, 0];
    const dirCol = [0, 1, 0, -1];
    
    visited[0][0] = true;
    
    while(queue.length > 0) {
        const [row, col, dist] = queue.shift();
        if(row === endRow && col === endCol) return dist;

        for(let i = 0; i < 4; i++) {
            const nextRow = row + dirRow[i];
            const nextCol = col + dirCol[i];
            if(nextRow >= 0 &&
               nextRow <= endRow &&
               nextCol >= 0 &&
               nextCol <= endCol &&
               maps[nextRow][nextCol] !== 0 &&
               !visited[nextRow][nextCol]) {
                queue.push([nextRow, nextCol, dist + 1])
                visited[nextRow][nextCol] = true;
            }
        }
    }
    return -1;
}