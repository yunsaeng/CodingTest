function solution(m, n, puddles) {
  const MOD = 1000000007;
  
  const dp = Array.from({ length: m }, () => Array(n).fill(0));

  const isPuddles = (gps) => {
    return puddles.some(([x, y]) => x === gps[0] && y === gps[1]);
  };

  dp[0][0] = 1;

  for (let i = 1; i < m; i++) {
    if (!isPuddles([i + 1, 1])) dp[i][0] = dp[i - 1][0];
  }

  for (let i = 1; i < n; i++) {
    if (!isPuddles([1, i + 1])) dp[0][i] = dp[0][i - 1];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (!isPuddles([i + 1, j + 1])) {
        dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % MOD;
      }
    }
  }

  return dp[m - 1][n - 1];
}