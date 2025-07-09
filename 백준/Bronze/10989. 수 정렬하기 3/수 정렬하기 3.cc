#include <iostream>

using namespace std;

int count[10001];

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);

    int N, num;
    cin >> N;

    // 입력 값의 개수를 세기
    for (int i = 0; i < N; i++) {
        cin >> num;
        count[num]++;
    }

    // 정렬된 형태로 출력
    for (int i = 1; i <= 10000; i++) {
        while (count[i]--) {
            cout << i << '\n';
        }
    }

    return 0;
}