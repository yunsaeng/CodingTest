function solution(arr) {
  const answer = Array(2).fill(0);

  const dfs = (row, col, len) => {
    if (len === 1) {
      answer[arr[row][col]]++;
      return;
    }

    const set = new Set();
    for (let i = row; i < row + len; i++) {
      for (let j = col; j < col + len; j++) {
        set.add(arr[i][j]);
      }
    }

    if (set.size === 1) {
      answer[[...set][0]]++;
      return;
    } else {
      dfs(row, col, len / 2);
      dfs(row, col + len / 2, len / 2);
      dfs(row + len / 2, col, len / 2);
      dfs(row + len / 2, col + len / 2, len / 2);
    }
  };

  dfs(0, 0, arr.length);
  return answer;
}