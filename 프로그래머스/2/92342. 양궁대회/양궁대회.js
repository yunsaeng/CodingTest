function solution(n, info) {
  let maxDiff = 0;
  let answer = Array(11).fill(0);

  const calculateScore = (ryan, apeach) => {
    let ryanScore = 0;
    let apeachScore = 0;

    for (let i = 0; i < 11; i++) {
      if (ryan[i] === 0 && apeach[i] === 0) continue;
      if (ryan[i] > apeach[i]) ryanScore += 10 - i;
      else apeachScore += 10 - i;
    }

    return ryanScore - apeachScore;
  };

  const dfs = (index, remainingArrows, ryan) => {
    if (index === 11 || remainingArrows === 0) {
      ryan[10] += remainingArrows;
      const diff = calculateScore(ryan, info);

      if (diff > maxDiff) {
        maxDiff = diff;
        answer = [...ryan];
      } else if (diff === maxDiff) {
        for (let i = 10; i >= 0; i--) {
          if (ryan[i] > answer[i]) {
            answer = [...ryan];
            break;
          } else if (ryan[i] < answer[i]) break;
        }
      }

      ryan[10] -= remainingArrows;
      return;
    }

    const neededArrows = info[index] + 1;

    dfs(index + 1, remainingArrows, ryan);

    if (remainingArrows >= neededArrows) {
      ryan[index] = neededArrows;
      dfs(index + 1, remainingArrows - neededArrows, ryan);
      ryan[index] = 0;
    }
  };

  dfs(0, n, Array(11).fill(0));

  return maxDiff > 0 ? answer : [-1];
}