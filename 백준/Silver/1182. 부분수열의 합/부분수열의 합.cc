#include <bits/stdc++.h>

using namespace std;


int N, S, sum=0, answer=0;
int arr[20];

void BT(int pos) {
    if(pos!=0 && sum==S)
        answer++;

    for(int i=pos; i<N; i++) {
        sum+=arr[i];
        BT(i+1);
        sum-=arr[i];
    }
}

int main() {
    cin >> N >> S;
    for(int i=0; i<N; i++) {
        cin >> arr[i];
    }
    BT(0);
    cout << answer << '\n';
}