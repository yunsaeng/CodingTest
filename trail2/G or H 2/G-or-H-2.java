import java.util.Scanner;

public class Main {
    public static final int MAX_NUM = 100;

    public static int n;
    // signAtPosition[p]는 위치 p에 G가 있으면 1, H가 있으면 2, 아무도 없으면 0입니다.
    public static int[] signAtPosition = new int[MAX_NUM + 1];

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // 사람 수와 각 사람의 위치, 팻말 알파벳을 입력받습니다.
        n = sc.nextInt();
        for(int i = 0; i < n; i++) {
            int position = sc.nextInt();
            char letter = sc.next().charAt(0);

            if(letter == 'G')
                signAtPosition[position] = 1;
            else
                signAtPosition[position] = 2;
        }

        // 사진의 양 끝이 될 수 있는 두 위치를 모두 잡아봅니다.
        // 위치로 0이 주어질 수 있으므로 0부터 시작합니다.
        int maxSize = 0;
        for(int i = 0; i <= MAX_NUM; i++) {
            for(int j = i + 1; j <= MAX_NUM; j++) {
                // 두 끝 위치에 실제로 사람이 서 있는지 확인합니다.
                if(signAtPosition[i] == 0 || signAtPosition[j] == 0)
                    continue;

                // 구간 [i, j]에 들어 있는 G와 H의 개수를 각각 셉니다.
                int cntG = 0;
                int cntH = 0;

                for(int k = i; k <= j; k++) {
                    if(signAtPosition[k] == 1)
                        cntG++;
                    if(signAtPosition[k] == 2)
                        cntH++;
                }

                // 조건을 만족하면 사진의 크기를 최댓값과 비교합니다.
                if(cntG == 0 || cntH == 0 || cntG == cntH) {
                    int size = j - i;
                    maxSize = Math.max(maxSize, size);
                }
            }
        }

        System.out.println(maxSize);
    }
}

