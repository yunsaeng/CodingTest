#include <bits/stdc++.h>

using namespace std;

#define MAX 100

int N, answer=MAX;
bool visited[20];
int stats[20][20];

void BT(int x, int pos) {
    if(x == N/2) {
        int start=0, link=0;
        
        for(int i=0; i<N; i++) {
            for(int j=0; j<N; j++) {
                if(visited[i]==true && visited[j]==true)
                    start+=stats[i][j];
                if(visited[i]==false && visited[j]==false)
                    link+=stats[i][j];
            }
        }
        
        int temp = abs(start-link);
        if(answer>temp)
            answer=temp;
    }
    
    for(int i=pos; i<N; i++) {
        visited[i] = true;
        BT(x+1, i+1);
        visited[i] = false;
    }
}

int main() {
    cin >> N;
    for(int i=0; i<N; i++) {
        for(int j=0; j<N; j++) {
            cin >> stats[i][j];
        }
    }
    
    BT(0,0);
    
    cout << answer << '\n';
}
