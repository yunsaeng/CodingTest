function solution(N, number) {
  const dp = Array.from({ length: 9 }, () => new Set());
  for (let i = 1; i <= 8; i++) {
    dp[i].add(Number(String(N).repeat(i)));
    for (let j = 1; j < i; j++) {
      for (const v1 of dp[j]) {
        for (const v2 of dp[i - j]) {
          dp[i].add(v1 + v2);
          dp[i].add(v1 - v2);
          dp[i].add(v1 * v2);
          if (v2 !== 0) dp[i].add(Math.floor(v1 / v2));
        }
      }
    }
    if (dp[i].has(number)) return i;
  }
  return -1;
}