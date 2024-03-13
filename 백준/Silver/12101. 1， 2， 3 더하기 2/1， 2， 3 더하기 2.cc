#include <bits/stdc++.h>

using namespace std;

int n, k, cnt=0;
string answer, s="";

void BT(int sum) {
    if (sum==n) {
        cnt++;
        if (cnt==k) {
            answer=s;
        }
        return;
    }
    
    for(int i=1; i<=3; i++) {
        if(answer.empty() && sum<n) {
            s+=to_string(i);
            s+='+';
            BT(sum+i);
            s.pop_back();
            s.pop_back();
        }
    }
}

int main() {
    cin >> n >> k;
    
    BT(0);
    
    if(!answer.empty()) {
        answer.pop_back();
        cout << answer;
    }
    else {
        cout << -1;
    }
    cout << '\n';
}
