//18290번: NM과 K (1)
#include <iostream>
using namespace std;

int arr[10][10];
bool check[10][10];
int answer=-40000; //입력받는 수의 최솟값은 -10000이고 k는 최대 4이므로 sum의 최솟값인-10000*4=-40000을 answer로 설정. 
int n,m,k;
int dx[]={-1,1,0,0};
int dy[]={0,0,-1,1};


void func(int cnt, int sum){
    if(cnt==k){
        if(answer<sum)
        answer=sum;
        return;
    }
    for(int x=0; x<n; x++){
        for(int y=0; y<m; y++){
            if(check[x][y]) // 사용 중복 확인.
                continue;
            
            bool flag= true; //조건 부합 여부 체크
            
            for(int i=0; i<4; i++){ //인접한 칸 사용했는지 검사
                int nx=x+dx[i];
                int ny=y+dy[i];
                if(nx>=0 && nx<n && ny>=0 && ny<m){
                    if(check[nx][ny])
                        flag=false;
                    }

            }
            //arr[x][y] 해당하는수가 이미 사용되었거나, 그 인접칸이 사용되었을 경우 pass하고 다음 for문으로 이동.
            if(flag){ //조건 통과된 경우 (flag==true)
                check[x][y]=true;
                func(cnt+1,sum+arr[x][y]);
                check[x][y]=false;
            }
            
        }
    }

}

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);

    cin>>n>>m>>k;
    for(int i=0; i<n; i++){
        for(int j=0; j<m; j++)
        cin>>arr[i][j];
    }

    func(0,0);
    cout<<answer<<"\n";
}