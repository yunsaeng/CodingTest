import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] arr = new int[7];
        for (int i = 0; i < 7; i++) {
            arr[i] = sc.nextInt();
        }
        Arrays.sort(arr);

        int a = arr[0], b = arr[1], c = 0;;
        if(a + b + arr[2] == arr[6]) c = arr[2];
        else c = arr[3];

        System.out.printf("%d %d %d", a, b, c);
    }
}