#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
  int N;
  cin >> N;
  vector<vector<int>> dp(N + 1, vector<int>(3, 0));
  vector<int> point(N+1, 0);

  for(int i = 1; i <= N; i++) cin >> point[i];

  for(int i = 1; i <= N; i++) {
    if(i == 2) dp[i][1] = dp[i-1][1] + point[i];
    else dp[i][1] = dp[i-1][2] + point[i];
    
    if(i == 1) dp[i][2] = 0;
    else dp[i][2] = max(dp[i-2][1], dp[i-2][2]) + point[i];
  }

  cout << max(dp[N][1], dp[N][2]);
  return 0;
}