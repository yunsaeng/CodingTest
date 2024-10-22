function solution(points, routes) {
  let visited = new Map();

  const crush = (row, col, time) => {
    const key = `${row}, ${col}, ${time}`;
    if (visited.has(key)) visited.set(key, visited.get(key) + 1);
    else visited.set(key, 1);
  };

  const move = (start_row, start_col, end_row, end_col, time) => {
    let temp = time;
    while (start_row !== end_row) {
      start_row = start_row > end_row ? start_row - 1 : start_row + 1;
      temp++;
      crush(start_row, start_col, temp);
    }

    while (start_col !== end_col) {
      start_col = start_col > end_col ? start_col - 1 : start_col + 1;
      temp++;
      crush(start_row, start_col, temp);
    }

    return temp;
  };

  routes.forEach((route) => {
    let time = 0;
    crush(points[route[0] - 1][0], points[route[0] - 1][1], time); // 완전 처음 시작 값
    for (let i = 1; i < route.length; i++) {
      const start = route[i - 1];
      const end = route[i];
      const [start_row, start_col] = points[start - 1];
      const [end_row, end_col] = points[end - 1];

      time = move(start_row, start_col, end_row, end_col, time);
    }
  });

  let answer = 0;
  for (const [key, value] of visited) if (value > 1) answer++;
  return answer;
}
