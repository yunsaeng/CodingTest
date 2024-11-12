function solution(storey) {
  if (storey < 5) return storey;

  const posDigit = storey % 10;
  storey = (storey - posDigit) / 10;
  return Math.min(
    posDigit + solution(storey),
    10 - posDigit + solution(storey + 1)
  );
}
