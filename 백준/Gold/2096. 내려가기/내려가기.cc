#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int N;
    cin >> N;

    int prevMax[3], prevMin[3];
    int a, b, c;

    // 첫 줄 입력
    cin >> prevMax[0] >> prevMax[1] >> prevMax[2];
    prevMin[0] = prevMax[0];
    prevMin[1] = prevMax[1];
    prevMin[2] = prevMax[2];

    for (int i = 1; i < N; i++) {
        cin >> a >> b >> c;

        int nextMax[3], nextMin[3];

        nextMax[0] = a + max(prevMax[0], prevMax[1]);
        nextMax[1] = b + max({prevMax[0], prevMax[1], prevMax[2]});
        nextMax[2] = c + max(prevMax[1], prevMax[2]);

        nextMin[0] = a + min(prevMin[0], prevMin[1]);
        nextMin[1] = b + min({prevMin[0], prevMin[1], prevMin[2]});
        nextMin[2] = c + min(prevMin[1], prevMin[2]);

        // 현재 줄을 이전 줄로 덮어쓰기
        for (int j = 0; j < 3; j++) {
            prevMax[j] = nextMax[j];
            prevMin[j] = nextMin[j];
        }
    }

    cout << *max_element(prevMax, prevMax + 3) << " " << *min_element(prevMin, prevMin + 3) << '\n';
    return 0;
}