function solution(expression) {
  const tokens = expression.match(/\d+|[-+*]/g);
  const operators = [...new Set(expression.match(/[-+*]/g))];

  const getPermutations = (arr, n) => {
    if (n === 1) return arr.map((e) => [e]);
    return arr.flatMap((fixed, idx) =>
      getPermutations([...arr.slice(0, idx), ...arr.slice(idx + 1)], n - 1).map(
        (perm) => [fixed, ...perm]
      )
    );
  };
  const permutations = getPermutations(operators, operators.length);
  let max = Number.MIN_SAFE_INTEGER;

  for (const permutation of permutations) {
    const tempTokens = [...tokens];
    for (const operator of permutation) {
      while (tempTokens.includes(operator)) {
        const idx = tempTokens.indexOf(operator);
        const calc = eval(
          `${tempTokens[idx - 1]} ${tempTokens[idx]} ${tempTokens[idx + 1]}`
        );
        tempTokens.splice(idx - 1, 3, calc);
      }
    }
    max = Math.max(max, Math.abs(tempTokens[0]));
  }

  return max;
}