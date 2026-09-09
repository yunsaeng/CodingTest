import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] arr = new int[11];

        while(true) {
            int n = sc.nextInt();
            if(n == 0) break;
            arr[n / 10]++;
        }
        for(int i = 10; i >= 1; i--) System.out.println((i * 10) + " - " + arr[i]);
    }
}