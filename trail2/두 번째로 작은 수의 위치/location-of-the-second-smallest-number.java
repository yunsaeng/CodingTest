import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int[] arr = new int[N];
        for (int i = 0; i < N; i++) {
            arr[i] = sc.nextInt();
        }

        // 1. 가장 작은 값 찾기
        int min = arr[0];
        for (int i = 1; i < N; i++) {
            if (arr[i] < min) min = arr[i];
        }

        // 2. min보다 큰 값 중 가장 작은 값 찾기 (두 번째로 작은 값)
        int second = -1;
        for (int i = 0; i < N; i++) {
            if (arr[i] > min && (second == -1 || arr[i] < second)) {
                second = arr[i];
            }
        }

        // 두 번째 값이 없으면 -1
        if (second == -1) {
            System.out.println(-1);
            return;
        }

        // 3. second의 개수 세기 + 첫 위치 찾기
        int count = 0;
        int pos = -1;
        for (int i = 0; i < N; i++) {
            if (arr[i] == second) {
                count++;
                if (pos == -1) pos = i + 1;   // 1-indexed
            }
        }

        // 두 번 이상이면 -1, 아니면 위치 출력
        System.out.println(count >= 2 ? -1 : pos);
    }
}