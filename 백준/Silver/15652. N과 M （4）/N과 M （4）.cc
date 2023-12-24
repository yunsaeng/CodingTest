#include <bits/stdc++.h>
#define MAX 9

using namespace std;

int M, N;
int arr[MAX] = {0,};

void BT(int cnt, int min) {
    if(cnt == M) {
        for(int i=0; i<M; i++) {
            cout << arr[i] << ' ';
        }
        cout << '\n';
        return;
    }
    
    for(int i=min; i<=N; i++) {
        arr[cnt] = i;
        BT(cnt+1, i);
    }
}

int main() {
    cin >> N >> M;
    BT(0, 1);
}
