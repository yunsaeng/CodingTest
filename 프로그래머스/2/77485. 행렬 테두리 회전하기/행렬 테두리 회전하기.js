function solution(rows, columns, queries) {
  const arr = Array.from({ length: rows }, (_, r) =>
    Array.from({ length: columns }, (_, c) => r * columns + c + 1)
  );
  return queries.map((query) => {
    const [sr, sc, er, ec] = query.map((e) => e - 1);
    let min = arr[sr][sc];
    const temp = arr[sr][sc];

    for (let i = sr; i < er; i++) {
      arr[i][sc] = arr[i + 1][sc];
      min = Math.min(min, arr[i][sc]);
    }

    for (let i = sc; i < ec; i++) {
      arr[er][i] = arr[er][i + 1];
      min = Math.min(min, arr[er][i]);
    }

    for (let i = er; i > sr; i--) {
      arr[i][ec] = arr[i - 1][ec];
      min = Math.min(min, arr[i][ec]);
    }

    for (let i = ec; i > sc; i--) {
      arr[sr][i] = arr[sr][i - 1];
      min = Math.min(min, arr[sr][i]);
    }

    arr[sr][sc + 1] = temp;
    return min;
  });
}
