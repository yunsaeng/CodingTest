function solution(rectangle, characterX, characterY, itemX, itemY) {
    const board = Array.from({ length: 103 }, () => Array(103).fill(0));

    // 1. 모든 영역을 1로 설정
    rectangle.forEach(([sx, sy, ex, ey]) => {
        sx *= 2; sy *= 2; ex *= 2; ey *= 2;
        for (let x = sx; x <= ex; x++) {
            for (let y = sy; y <= ey; y++) {
                board[x][y] = 1;  // 일단 전체를 1로 설정
            }
        }
    });

    // 2. 내부를 0으로 비우기 (테두리만 남기기)
    rectangle.forEach(([sx, sy, ex, ey]) => {
        sx *= 2; sy *= 2; ex *= 2; ey *= 2;
        for (let x = sx + 1; x < ex; x++) {
            for (let y = sy + 1; y < ey; y++) {
                board[x][y] = 0;  // 내부는 0으로 초기화 (테두리만 1 유지)
            }
        }
    });

    // 3. BFS 탐색
    const visited = Array.from({ length: 103 }, () => Array(103).fill(false));
    visited[characterX * 2][characterY * 2] = true;
    const queue = [[characterX * 2, characterY * 2, 0]];
    const dirX = [1, 0, -1, 0];
    const dirY = [0, 1, 0, -1];

    while (queue.length > 0) {
        const [x, y, dist] = queue.shift();
        if (x === itemX * 2 && y === itemY * 2) return dist / 2;

        for (let i = 0; i < 4; i++) {
            const nx = x + dirX[i];
            const ny = y + dirY[i];
            if (nx >= 0 && nx < 103 && ny >= 0 && ny < 103 && !visited[nx][ny] && board[nx][ny] === 1) {
                visited[nx][ny] = true;
                queue.push([nx, ny, dist + 1]);
            }
        }
    }

    return 0;
}