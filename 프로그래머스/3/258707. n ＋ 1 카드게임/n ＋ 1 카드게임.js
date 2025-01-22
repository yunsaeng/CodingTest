function solution(coin, cards) {
  let round = 1;
  const TARGET = cards.length + 1;
  const INITIAL_VALUE = cards.length / 3;
  const INITIAL_HAND = cards.slice(0, INITIAL_VALUE);
  const submitCards = [];

  for (let i = INITIAL_VALUE + 2; i <= cards.length; i += 2) {
    const currentHand = cards
      .slice(0, i)
      .filter((card) => !submitCards.includes(card));
    const combination = getCombination(currentHand, 2);
    const targetCombination = getTargetCombination(combination);

    if (targetCombination.length === 0) return round;

    let min = Number.MAX_SAFE_INTEGER;
    let temp = [];
    targetCombination.forEach((combination) => {
      const useCoin = getCoin(combination);
      if (useCoin < min) {
        min = useCoin;
        temp = combination;
      }
    });
    if (coin < min) return round;

    round++;
    coin -= min;
    submitCards.push(...temp);
  }

  return round;

  function getCoin(combination) {
    let coin = 0;
    combination.forEach((card) => {
      if (!INITIAL_HAND.includes(card)) coin++;
    });
    return coin;
  }

  function getTargetCombination(combination) {
    const result = [];
    combination.forEach((combi) => {
      const sum = combi.reduce((a, b) => a + b, 0);
      if (sum === TARGET) result.push(combi);
    });
    return result;
  }

  function getCombination(array, selectedNum) {
    const result = [];
    if (selectedNum === 1) return array.map((e) => [e]);
    array.forEach((fixed, idx, origin) => {
      const rest = origin.slice(idx + 1);
      getCombination(rest, selectedNum - 1).forEach((combination) => {
        result.push([fixed, ...combination]);
      });
    });
    return result;
  }
}

// https://fordang.tistory.com/247 참고
