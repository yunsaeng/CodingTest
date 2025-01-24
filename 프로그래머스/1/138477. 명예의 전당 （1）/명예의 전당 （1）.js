function solution(k, score) {
  let stack = [];
  return score.reduce((acc, cur) => {
    stack.push(cur);
    stack = stack.sort((a, b) => b - a).slice(0, k);
    return [...acc, Math.min(...stack)];
  }, []);
}
