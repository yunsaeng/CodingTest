#include <bits/stdc++.h>
#define MAX 8

using namespace std;

int M, N, num;
int arr[MAX] = {0,};
int number[MAX] = {0,};

void BT(int cnt) {
    if(cnt == M) {
        for(int i=0; i<M; i++) {
            cout << arr[i] << ' ';
        }
        cout << '\n';
        return;
    }
    
    int tmp = 0;
    for(int i=0; i<N; i++) {
        if(tmp != number[i]) {
            arr[cnt] = number[i];
            tmp = number[i];
            BT(cnt+1);
        }
    }
}

int main() {
    cin >> N >> M;
    for(int i=0; i<N; i++) {
        cin >> number[i];
    }
    sort(number, number+N);
    BT(0);
}
