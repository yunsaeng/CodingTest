#include <bits/stdc++.h>

using namespace std;

#define MAX "9876543210"
#define MIN "0"

int k;
string s="", maxResult=MIN, minResult=MAX;
char arr[10];
// int num[10] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
bool visited[10];

void DFS() {
    if(s.size() == k+1) {
        maxResult = max(s, maxResult);
        minResult = min(s, minResult);
        return;
    }
    
    for(int i=0; i<=9; i++) {
        if(visited[i]) continue;
        if(arr[s.size() - 1] == '>')
            if(s.back() - '0' < i) continue;
        if(arr[s.size() - 1] == '<')
            if(s.back() - '0' > i) continue;
        
        visited[i] = true;
        s.push_back(i + '0');
        DFS();
        visited[i] = false;
        s.pop_back();
    }
}

void solution() {
    for(int i=0; i<=9; i++) {
        visited[i] = true;
        s.push_back(i + '0');
        DFS();
        visited[i] = false;
        s.pop_back();
    }
}

int main() {
    cin >> k;
    for(int i=0; i<k; i++) {
        cin >> arr[i];
    }
    solution();
    cout << maxResult << '\n';
    cout << minResult << '\n';
}
