#include <bits/stdc++.h>

using namespace std;

#define MIN -100

int N, sum=0, answer=MIN;
int arr[8];
bool visited[8];

void BT(int pos) {
    for(int i=0; i<N; i++) {
        if(!visited[i] && pos!=i) {
            visited[pos] = true;
            sum+=abs(arr[pos]-arr[i]);
            BT(i);
            visited[pos] = false;
            sum-=abs(arr[pos]-arr[i]);
        }
    }
    if(answer<sum) {
        answer = sum;
    }
}

int main() {
    cin >> N;
    for(int i=0; i<N; i++) {
        cin >> arr[i];
    }
    for(int i=0; i<N; i++) {
        BT(i);
    }
    cout << answer << '\n';
}