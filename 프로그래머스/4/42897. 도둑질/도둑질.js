function solution(money) {
  const houseCount = money.length;
  const dp = Array.from({ length: 2 }, () => Array(houseCount).fill(0));
  dp[0][0] = dp[0][1] = money[0];
  dp[1][1] = money[1];
  for (let i = 2; i < houseCount - 1; i++)
    dp[0][i] = Math.max(dp[0][i - 2] + money[i], dp[0][i - 1]);
  for (let i = 2; i < houseCount; i++)
    dp[1][i] = Math.max(dp[1][i - 2] + money[i], dp[1][i - 1]);
  return Math.max(dp[0][houseCount - 2], dp[1][houseCount - 1]);
}