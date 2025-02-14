function solution(N, stages) {
  const answer = [];
  for (let i = 1; i <= N; i++) {
    const total = stages.filter((stage) => stage >= i).length;
    const rest = stages.filter((stage) => stage === i).length;
    answer.push([i, rest / total]);
  }

  return answer.sort((a, b) => b[1] - a[1]).map((e) => e[0]);
}
