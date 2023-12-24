#include <bits/stdc++.h>
#define MAX 8

using namespace std;

int M, N;
int arr[MAX] = {0,};

void BT(int cnt) {
    if(cnt == M) {
        for(int i=0; i<M; i++) {
            cout << arr[i] << ' ';
        }
        cout << '\n';
        return;
    }
    
    for(int i=1; i<=N; i++) {
        arr[cnt] = i;
        BT(cnt+1);
    }
}

int main() {
    cin >> N >> M;
    BT(0);
}
