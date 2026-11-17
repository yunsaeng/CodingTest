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

        int a = arr[0], b = arr[1], c = arr[2], d = arr[14] - a - b -c;

        System.out.printf("%d %d %d %d", a, b, c, d);
    }
}