import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int[] arr = new int[N];

        int cnt = 1;
        for(int i = 0; i < N; i++) arr[i] = cnt++;

        for(int i = 0; i < N; i++) {
            if(i % 2 == 0) {
                for(int j = 0; j < N; j++) {
                    System.out.print(arr[j]);
                }
            } else {
                for(int j = N - 1; j >= 0; j--) {
                    System.out.print(arr[j]);
                }
            }

            System.out.println();
        }
    }
}