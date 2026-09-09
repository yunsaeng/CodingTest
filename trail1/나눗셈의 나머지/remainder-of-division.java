import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt(), B = sc.nextInt();
        int[] arr = new int[B];

        while(A > 1) {
            arr[A % B]++;
            A /= B;
        }
        
        int sum = 0;
        for(int i = 0; i < B; i++) sum += arr[i] * arr[i];
        System.out.print(sum);
    }
}