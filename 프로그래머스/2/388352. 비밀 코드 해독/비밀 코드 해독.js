function solution(n, q, ans) {
  const getCombinations = (number) => {
    const result = [];

    const combine = (start, combo) => {
      if (combo.length === 5) {
        result.push([...combo]);
        return;
      }

      for (let i = start; i <= number; i++) {
        combo.push(i);
        combine(i + 1, combo);
        combo.pop();
      }
    };

    combine(1, []);
    return result;
  };

  const isValidCombination = (combination) => {
    for (let i = 0; i < q.length; i++) {
      const intersectionCount = q[i].filter((e) =>
        combination.includes(e)
      ).length;
      if (intersectionCount !== ans[i]) return false;
    }
    return true;
  };

  return getCombinations(n).filter(isValidCombination).length;
}
