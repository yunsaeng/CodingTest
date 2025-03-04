function solution(rows, columns, queries) {
  const answer = [];

  const arr = Array.from({ length: rows }, (_, r) =>
    Array.from({ length: columns }, (_, c) => r * columns + c + 1)
  );

  queries.forEach((query) => {
    const [sr, sc, er, ec] = query;
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = sr - 1; i < er - 1; i++) {
      min = Math.min(min, Math.min(arr[i][sc - 1], arr[i + 1][sc - 1]));
      [arr[i][sc - 1], arr[i + 1][sc - 1]] = [
        arr[i + 1][sc - 1],
        arr[i][sc - 1],
      ];
    }
    for (let i = sc - 1; i < ec - 1; i++) {
      min = Math.min(min, Math.min(arr[er - 1][i], arr[er - 1][i + 1]));
      [arr[er - 1][i], arr[er - 1][i + 1]] = [
        arr[er - 1][i + 1],
        arr[er - 1][i],
      ];
    }
    for (let i = er - 1; i > sr - 1; i--) {
      min = Math.min(min, Math.min(arr[i][ec - 1], arr[i - 1][ec - 1]));
      [arr[i][ec - 1], arr[i - 1][ec - 1]] = [
        arr[i - 1][ec - 1],
        arr[i][ec - 1],
      ];
    }
    for (let i = ec - 1; i > sc; i--) {
      min = Math.min(min, Math.min(arr[sr - 1][i], arr[sr - 1][i - 1]));
      [arr[sr - 1][i], arr[sr - 1][i - 1]] = [
        arr[sr - 1][i - 1],
        arr[sr - 1][i],
      ];
    }
    
    answer.push(min);
  });
  return answer;
}
