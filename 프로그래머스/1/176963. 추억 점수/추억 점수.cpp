#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> solution(vector<string> name, vector<int> yearning, vector<vector<string>> photo) {
    vector<int> answer;
    for(int i=0; i<photo.size(); i++) {
        int temp = 0;
        for(int j=0; j<photo[i].size(); j++) {
            auto it = find(name.begin(), name.end(), photo[i][j]);
            if(it != name.end()) {
                int index = it - name.begin();
                temp+=yearning[index];
            }
        }
        answer.push_back(temp);
    }
    return answer;
}