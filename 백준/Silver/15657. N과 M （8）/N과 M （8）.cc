#include <bits/stdc++.h>
#define MAX 8

using namespace std;

int M, N, num;
int arr[MAX] = {0,};
vector<int> v;

void BT(int cnt, int minIndex) {
    if(cnt == M) {
        for(int i=0; i<M; i++) {
            cout << arr[i] << ' ';
        }
        cout << '\n';
        return;
    }
    
    for(int i=minIndex; i<N; i++) {
            arr[cnt] = v[i];
            BT(cnt+1, i);
    }
}

int main() {
    cin >> N >> M;
    for(int i=1; i<=N; i++) {
        cin >> num;
        v.push_back(num);
    }
    sort(v.begin(), v.end());
    BT(0, 0);
}
