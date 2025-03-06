function solution(arr) {
  const operandCount = Math.ceil(arr.length / 2);
  const max_dp = Array.from({ length: operandCount }, () =>
    Array(operandCount).fill(Number.MIN_SAFE_INTEGER)
  );
  const min_dp = Array.from({ length: operandCount }, () =>
    Array(operandCount).fill(Number.MAX_SAFE_INTEGER)
  );

  for (let i = 0; i < operandCount; i++) {
    max_dp[i][i] = +arr[i * 2];
    min_dp[i][i] = +arr[i * 2];
  }

  for (let cnt = 1; cnt < operandCount; cnt++) {
    for (let start = 0; start < operandCount - cnt; start++) {
      const end = start + cnt;
      for (let mid = start; mid < end; mid++) {
        if (arr[mid * 2 + 1] === "+") {
          max_dp[start][end] = Math.max(
            max_dp[start][end],
            max_dp[start][mid] + max_dp[mid + 1][end]
          );
          min_dp[start][end] = Math.min(
            min_dp[start][end],
            min_dp[start][mid] + min_dp[mid + 1][end]
          );
        } else {
          max_dp[start][end] = Math.max(
            max_dp[start][end],
            max_dp[start][mid] - min_dp[mid + 1][end]
          );
          min_dp[start][end] = Math.min(
            min_dp[start][end],
            min_dp[start][mid] - max_dp[mid + 1][end]
          );
        }
      }
    }
  }

  return max_dp[0][operandCount - 1];
}
