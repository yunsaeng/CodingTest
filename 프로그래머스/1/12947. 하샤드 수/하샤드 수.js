function solution(x) {
  return (
    x %
      x
        .toString()
        .split("")
        .map((e) => Number(e))
        .reduce((acc, cur) => acc + cur, 0) ===
    0
  );
}
