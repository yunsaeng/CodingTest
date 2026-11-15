import java.util.Scanner;
import java.util.Arrays;

public class Main {
    public static final int MAX_N = 3;

    public static int n = MAX_N;
    public static int[] a = new int[MAX_N];

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // 변수를 선언하고 입력을 받습니다.
        for(int i = 0; i < n; i++)
            a[i] = sc.nextInt();

        // 주어진 값들을 정렬합니다.
        Arrays.sort(a);

        // Case 1. 3개의 정수가 전부 연속한 경우
        // 이 경우에는 이동할 필요가 없으므로
        // 최소 이동 횟수는 0이 됩니다.
        if(a[0] + 1 == a[1] && a[1] + 1 == a[2])
            System.out.println(0);
        // Case 2. 2개의 정수의 차이가 정확히 2가 나는 경우
        // 이 경우에는 남은 정수를 두 정수 사이에 바로 넣어주면 되므로
        // 최소 이동 횟수는 1이 됩니다.
        else if(a[0] + 2 == a[1] || a[1] + 2 == a[2])
            System.out.println(1);
        // Case 3. 그렇지 않은 경우에는 항상 2번에 걸쳐
        // 3개의 정수를 연속하게 만드는 것이 가능합니다.
        else
            System.out.println(2);
    }
}

