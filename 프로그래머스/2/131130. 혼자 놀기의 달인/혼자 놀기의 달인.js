function solution(cards) {
  const groups = [];
  const visited = Array(cards.length).fill(false);

  const dfs = (index) => {
    let group = 0;
    while (!visited[index]) {
      visited[index] = true;
      index = cards[index] - 1;
      group++;
    }
    return group;
  };

  for (let i = 0; i < cards.length; i++) {
    if (!visited[i]) {
      const group = dfs(i);
      groups.push(group);
    }
  }
  groups.sort((a, b) => b - a);

  if (groups.length <= 1) return 0;
  else return groups[0] * groups[1];
}