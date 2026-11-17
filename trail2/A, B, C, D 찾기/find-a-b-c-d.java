import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] arr = new int[15];
        for (int i = 0; i < 15; i++) {
            arr[i] = sc.nextInt();
        }
        Arrays.sort(arr);

        int a = arr[0], b = arr[1], c = 0, d = 0;
        int cd = arr[14] - a - b;

        for(int i = 2; i <= 14; i++) {
            for(int j = i + 1; j <= 14; j++) {
                if(arr[i] + arr[j] == cd) {
                    c = arr[i];
                    d = arr[j];
                    break;
                }
                if(c != 0 && d != 0) break;
            }
        }

        System.out.printf("%d %d %d %d", a, b, c, d);
    }
}