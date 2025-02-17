function solution(n, m) {
  const getGCD = (a, b) => {
    if (b === 0) return a;
    return getGCD(b, a % b);
  };
  const GCD = getGCD(Math.max(n, m), Math.min(n, m));
  return [GCD, (n * m) / GCD];
}
