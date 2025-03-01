function solution(n) {
  return n
    .toString()
    .split("")
    .map((e) => Number(e))
    .reduce((acc, cur) => acc + cur, 0);
}
