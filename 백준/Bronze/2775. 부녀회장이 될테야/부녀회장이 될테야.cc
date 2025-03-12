#include <iostream>
#include <vector>
using namespace std;

int main() {
  int T;
  cin >> T;

  while(T--) {
    int k, n;
    cin >> k >> n;
    
    vector<vector<int>> dp(k + 1, vector<int>(n + 1, 0));

    for(int i = 0; i <= n; i++) {
      dp[0][i] = i;
    }

    for(int i = 1; i <= k; i++) {
      for(int j = 0; j <= n; j++) {
        for(int m = 0; m <= j; m++) {
          dp[i][j] += dp[i-1][m];
        }
      }
    }

    cout << dp[k][n] << endl;
  }

  return 0;
}