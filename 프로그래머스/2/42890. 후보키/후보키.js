function solution(relation) {
  const getCombination = (arr, n) => {
    if (n === 1) return arr.map((e) => [e]);
    return arr.flatMap((fixed, idx) =>
      getCombination(arr.slice(idx + 1), n - 1).map((combo) => [
        fixed,
        ...combo,
      ])
    );
  };

  const getCandidateKey = (combination, relation) => {
    const result = [];
    combination.forEach((combo) => {
      const set = new Set();
      relation.forEach((rel) => {
        set.add(combo.map((e) => rel[e]).join(","));
      });
      if (set.size === relation.length) result.push(combo);
    });

    return result;
  };

  const getMinimalityKey = (candidateKey) => {
    const result = [];
    while (candidateKey.length) {
      const key = candidateKey.shift();
      result.push(key);
      candidateKey = candidateKey.filter(
        (cur) => !key.every((k) => cur.includes(k))
      );
    }
    return result;
  };

  const n = relation[0].length;
  const arr = Array.from({ length: n }, (_, i) => i);
  const combination = [];
  for (let i = 1; i <= n; i++) combination.push(...getCombination(arr, i));

  const candidateKey = getCandidateKey(combination, relation);

  const result = getMinimalityKey(candidateKey);

  return result.length;
}