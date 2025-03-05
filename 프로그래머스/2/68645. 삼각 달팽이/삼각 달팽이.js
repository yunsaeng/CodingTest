function solution(n) {
  const answer = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));
  const total = (n * (n + 1)) / 2; // 삼각형에 들어갈 숫자의 총 개수
  let num = 1;
  let row = 0, col = 0;
  let dir = 0; // 0: 아래, 1: 오른쪽, 2: 대각선 위

  // 방향 이동을 위한 배열
  const dr = [1, 0, -1]; // row 변화 (아래, 오른쪽, 대각선 위)
  const dc = [0, 1, -1]; // col 변화

  while (num <= total) {
    answer[row][col] = num++;
    let nextRow = row + dr[dir];
    let nextCol = col + dc[dir];

    // 경계를 벗어나거나 이미 숫자가 채워진 경우 방향 전환
    if (
      nextRow >= n || // 아래로 벗어남
      nextCol >= answer[nextRow]?.length || // 오른쪽으로 벗어남
      nextRow < 0 || nextCol < 0 || // 왼쪽 위 대각선으로 벗어남
      answer[nextRow][nextCol] !== 0 // 이미 채워진 경우
    ) {
      dir = (dir + 1) % 3; // 방향 전환
      nextRow = row + dr[dir];
      nextCol = col + dc[dir];
    }

    row = nextRow;
    col = nextCol;
  }

  return answer.flat(); // 1차원 배열로 변환
}