function solution(weights) {
  const map = {};
  const ratios = [1, 3 / 2, 4 / 3, 2];

  return weights
    .sort((a, b) => b - a)
    .reduce((answer, weight) => {
      ratios.map((ratio) => (answer += map[weight * ratio] || 0));
      map[weight] = (map[weight] || 0) + 1;

      return answer;
    }, 0);
}
