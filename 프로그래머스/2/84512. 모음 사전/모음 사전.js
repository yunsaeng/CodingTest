function solution(word) {
  const answer = [];
  const vowels = ["A", "E", "I", "O", "U"];
  const dfs = (cur) => {
    if (cur.length === 5) return;
    for (let i = 0; i < vowels.length; i++) {
      cur += vowels[i];
      answer.push(cur);
      dfs(cur);
      cur = cur.slice(0, -1);
    }
  };
  dfs("");
  return answer.indexOf(word) + 1;
}
