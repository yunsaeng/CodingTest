function solution(m, n, startX, startY, balls) {
  let answer = [];

  const calculateDistance = (x1, y1, x2, y2) => {
    return (x2 - x1) ** 2 + (y2 - y1) ** 2;
  };

  balls.forEach(([ballX, ballY]) => {
    let distance = [];

    if (!(startX < ballX && startY === ballY))
      distance.push(calculateDistance(startX, startY, 2 * m - ballX, ballY));
    // 오른쪽
    if (!(startX > ballX && startY === ballY))
      distance.push(calculateDistance(startX, startY, -ballX, ballY));
    // 왼쪽
    if (!(startY < ballY && startX === ballX))
      distance.push(calculateDistance(startX, startY, ballX, 2 * n - ballY));
    // 위쪽
    if (!(startY > ballY && startX === ballX))
      distance.push(calculateDistance(startX, startY, ballX, -ballY));
    // 아래쪽

    answer.push(Math.min(...distance));
  });

  return answer;
}
