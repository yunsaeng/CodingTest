function solution(lottos, win_nums) {
  const winSet = new Set(win_nums);
  const result = lottos.reduce(
    (acc, cur) => {
      cur === 0 ? acc.zero += 1 : acc.zero;
      winSet.has(cur) ? acc.match += 1 : acc.match;
      return acc;
    },
    { zero: 0, match: 0 }
  );

  const getRank = (match) => {
    if (match === 6) return 1;
    else if (match === 5) return 2;
    else if (match === 4) return 3;
    else if (match === 3) return 4;
    else if (match === 2) return 5;
    return 6;
  };

  return [getRank(result.zero + result.match), getRank(result.match)];
}
