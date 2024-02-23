#include <bits/stdc++.h>

using namespace std;

int N, W, sum=0, answer=0;
vector<int> v;

void BT() {
    if(v.size() == 2) {
        if(answer < sum)
            answer = sum;
        return;
    }
    
    for(int i=1; i<v.size()-1; i++) {
        int tmp = v[i];
        int tmp_sum = v[i-1]*v[i+1];
        sum+=tmp_sum;
        v.erase(v.begin()+i);
        BT();
        sum-=tmp_sum;
        v.insert(v.begin()+i, tmp);
    }
}

int main() {
    cin >> N;
    for(int i=0; i<N; i++) {
        cin >> W;
        v.push_back(W);
    }
    
    BT();
    
    cout << answer << '\n';
}
