import java.util.Scanner;

public class Main {
    public static boolean isPossible(int num) {
        int a = num % 10;
        num /= 10;

        int b = num % 10;
        num /= 10;

        int c = num;

        return a != b && b != c && c != a && a != 0 && b != 0 && c != 0;
    }

    public static int[] compare(int target, int num) {
        int count1 = 0;
        int count2 = 0;

        int[] t = new int[3];
        int[] n = new int[3];

        for(int i = 0; i < 3; i++) {
            t[i] = target % 10;
            target /= 10;

            n[i] = num % 10;
            num /= 10;
        }

        for(int i = 0; i < 3; i++) {
            for(int j = 0; j < 3; j++) {
                if(t[i] == n[j]) {
                    if(i == j) count1++;
                    else count2++;
                }
            }
        }

        return new int[]{count1, count2};
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] num = new int[n];
        int[] count1 = new int[n];
        int[] count2 = new int[n];
        for (int i = 0; i < n; i++) {
            num[i] = sc.nextInt();
            count1[i] = sc.nextInt();
            count2[i] = sc.nextInt();
        }
        
        int cnt = 0;
        for(int i = 100; i <= 999; i++) {
            if(!isPossible(i)) continue;

            boolean isSame = true;
            for(int j = 0; j < n; j++) {
                int[] temp = compare(i, num[j]);
                if(temp[0] != count1[j] || temp[1] != count2[j]) {
                    isSame = false;
                    break;
                }
            }

            if(isSame) cnt++;
        }

        System.out.println(cnt);
    }
}