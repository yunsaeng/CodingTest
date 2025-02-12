function solution(numbers) {
  const numSet = new Set(numbers);
  return [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
    .filter((n) => !numSet.has(n))
    .reduce((acc, cur) => acc + cur, 0);
}