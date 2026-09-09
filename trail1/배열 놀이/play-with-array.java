import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt(), Q = sc.nextInt();

        int[] arr = new int[N];
        for(int i = 0; i < N; i++) arr[i] = sc.nextInt();

        for(int i = 0; i < Q; i++) {
            int q = sc.nextInt();
            if(q == 1) System.out.println(arr[sc.nextInt() - 1]);
            else if(q == 2) {
                int idx = -1, n = sc.nextInt();
                for(int j = 0; j < N; j++) {
                    if(arr[j] == n) {
                        idx = j;
                        break;
                    }
                }
                System.out.println(idx == -1 ? 0 : idx + 1);
            } else if(q == 3) {
                int start = sc.nextInt(), end = sc.nextInt();
                for(int j = start - 1; j < end; j++) System.out.print(arr[j] + " ");
                System.out.println();
            }
        }
    }
}