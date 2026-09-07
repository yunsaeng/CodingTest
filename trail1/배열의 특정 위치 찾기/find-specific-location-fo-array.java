import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] arr = new int[10];

        for(int i = 0; i < 10; i++) arr[i] = sc.nextInt();
        System.out.printf("%d %.1f", arr[1] + arr[3] + arr[5] + arr[7] + arr[9], (double)(arr[2] + arr[5] + arr[8]) / 3);
    }
}