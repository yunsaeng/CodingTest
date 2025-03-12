#include <iostream>
#include <vector>

using namespace std;

int main() {
  int N;
  cin >> N;
  vector<int> v(N + 1);

  v[0] = 0;
  v[1] = 1;

  for(int i = 2; i <= N; i++) v[i] = v[i-2] + v[i-1];
  cout << v[N];
  return 0;
}