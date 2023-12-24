#include <bits/stdc++.h>

using namespace std;

int M, N;
vector<int> v;

void BT();

int main() {
    cin >> M >> N;
    BT();
}

void BT() {
    if(v.size() == N) {
        for(int i=0; i<v.size(); i++) {
            cout << v[i] << ' ';
        }
        cout << '\n';
    }
    
    for(int i=1; i<=M; i++) {
        if(find(v.begin(), v.end(), i) == v.end()) {
            v.push_back(i);
            BT();
            v.erase(v.end()-1);
        }
    }
}
