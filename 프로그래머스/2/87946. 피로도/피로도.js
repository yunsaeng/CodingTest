function solution(k, dungeons) {
  let answer = 0;
  const visited = Array(dungeons.length).fill(false);
  let temp = 0;
  const dfs = () => {
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        if (k >= dungeons[i][0]) {
          k -= dungeons[i][1];
          temp++;
          dfs();
          temp--;
          k += dungeons[i][1];
        }
        visited[i] = false;
      }
    }

    if (answer < temp) {
      answer = temp;
    }
  };
  dfs();
  return answer;
}
