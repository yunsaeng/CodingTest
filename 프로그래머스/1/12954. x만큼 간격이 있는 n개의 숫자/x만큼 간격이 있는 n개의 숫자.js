function solution(x, n) {
  return Array.from({ length: n }, () => x).map((x, index) => x * (index + 1));
}