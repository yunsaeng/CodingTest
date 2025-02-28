function solution(n) {
  return Number.isInteger(Math.sqrt(n, 2))
    ? Math.pow(Math.sqrt(n, 2) + 1, 2)
    : -1;
}