function solution(info, n, m) {
  const dp = Array.from({ length: info.length + 1 }, () =>
    Array(m).fill(Infinity)
  );

  dp[0][0] = 0;
  for (let i = 1; i <= info.length; i++) {
    const [a, b] = info[i - 1];
    for (let j = 0; j < m; j++) {
      // a선택
      dp[i][j] = Math.min(dp[i - 1][j] + a, dp[i][j]);

      // b선택
      if (j + b < m) dp[i][j + b] = Math.min(dp[i - 1][j], dp[i][j + b]);
    }
  }

  const answer = dp[info.length].filter((e) => e < n);
  return answer.length > 0 ? Math.min(...answer) : -1;
}
