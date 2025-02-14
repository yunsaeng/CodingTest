function solution(N, stages) {
  const answer = [];

  stages = stages.sort((a, b) => a - b);
  for (let i = 1; i <= N; i++) {
    const total = stages.length;
    // if (total === 0) {
    //   answer.push([i, 0]);
    //   continue;
    // }

    let rest = 0;
    while (stages.length > 0 && stages[0] === i) {
      stages.shift();
      rest++;
    }
    answer.push([i, rest / total]);
  }

  return answer
    .sort((a, b) => (b[1] === a[1] ? a[0] - b[0] : b[1] - a[1]))
    .map((e) => e[0]);
}
