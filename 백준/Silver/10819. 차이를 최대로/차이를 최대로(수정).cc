#include <bits/stdc++.h>

using namespace std;

#define MIN -100

int N, answer=MIN;
int arr[8];
bool visited[8];
vector<int> v;

void BT() {
    if(v.size() == N) {
        int sum=0;
        for(int i=1; i<N; i++) {
            sum+=abs(v[i-1]-v[i]);
        }
        answer = max(sum, answer);
    }
    
    for(int i=0; i<N; i++) {
        if(!visited[i]) {
            visited[i] = true;
            v.push_back(arr[i]);
            BT();
            visited[i] = false;
            v.pop_back();
        }
    }
}

int main() {
    cin >> N;
    for(int i=0; i<N; i++) {
        cin >> arr[i];
    }
    BT();
    cout << answer << '\n';
}
