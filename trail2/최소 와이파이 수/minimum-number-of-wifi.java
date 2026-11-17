import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int m = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        int count = 0;
        int i = 0;
        while (i < n) {
            if (arr[i] == 0) {          // 사람이 없는 집은 건너뜀
                i++;
                continue;
            }
            // i를 덮는 wifi 중 가장 오른쪽 위치
            int c = Math.min(i + m, n - 1);
            count++;
            i = c + m + 1;              // 이 wifi가 덮는 마지막 집 다음부터 탐색
        }

        System.out.println(count);
    }
}