function solution(dice) {
  let answer = [];
  const n = dice.length;
  const half = n / 2;
  let maxWins = 0;

  const dfs = (index, diceA, diceB) => {
    if (diceA.length === half && diceB.length === half) {
      const sumA = calculateSums(dice, diceA);
      const sumB = calculateSums(dice, diceB);
      const wins = compareSums(sumA, sumB);

      if (wins > maxWins) {
        maxWins = wins;
        answer = [...diceA];
      }
      return;
    }

    if (index >= n) return;

    if (diceA.length < half) {
      diceA.push(index);
      dfs(index + 1, diceA, diceB);
      diceA.pop();
    }

    if (diceB.length < half) {
      diceB.push(index);
      dfs(index + 1, diceA, diceB);
      diceB.pop();
    }
  };

  const calculateSums = (dice, indices) => {
    const sums = [];
    const dfsSum = (depth, total) => {
      if (depth === indices.length) {
        sums.push(total);
        return;
      }

      const diceIndex = indices[depth];
      for (let i = 0; i < 6; i++) {
        dfsSum(depth + 1, total + dice[diceIndex][i]);
      }
    };
    dfsSum(0, 0);
    return sums;
  };

  const compareSums = (sumArrA, sumArrB) => {
    sumArrA.sort((a, b) => a - b);
    sumArrB.sort((a, b) => a - b);
    let wins = 0;
    let j = 0;

    for (let i = 0; i < sumArrA.length; i++) {
      while (j < sumArrB.length && sumArrA[i] > sumArrB[j]) {
        j++;
      }
      wins += j;
    }
    return wins;
  };

  dfs(0, [], []);
  return answer.map((e) => e + 1);
}
