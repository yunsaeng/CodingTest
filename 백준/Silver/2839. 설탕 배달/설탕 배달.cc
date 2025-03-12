#include <iostream>
#include <vector>
#include <algorithm>
#include <climits>
using namespace std;

int main() {
  int N;
  cin >> N;
  vector<int> dp(N+1, INT_MAX);

  dp[3] = 1;
  dp[5] = 1;

  for(int i = 6; i <= N; i++) {
    if(dp[i-3] != INT_MAX) dp[i] = dp[i-3] + 1;
    if(dp[i-5] != INT_MAX) dp[i] = min(dp[i], dp[i-5] + 1);
  }

  dp[N] = dp[N] == INT_MAX ? -1 : dp[N];
  cout << dp[N];
  return 0;
}