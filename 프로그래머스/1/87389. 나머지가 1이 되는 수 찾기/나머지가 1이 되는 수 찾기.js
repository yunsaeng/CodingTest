function solution(n) {
  const divisors = [];
  for (let i = 1; i <= Math.sqrt(n - 1); i++) {
    if ((n - 1) % i === 0) {
      if (i !== 1) {
        divisors.push(i);
      }
      divisors.push((n - 1) / i);
    }
  }
  return Math.min(...divisors.sort());
}
