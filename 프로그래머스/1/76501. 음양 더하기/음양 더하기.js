function solution(absolutes, signs) {
  return absolutes.reduce(
    (acc, cur, index) => (signs[index] ? acc + cur : acc - cur),
    0
  );
}