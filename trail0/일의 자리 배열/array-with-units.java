import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] arr = new int[10];

        for(int i = 0; i < 2; i++) {
            arr[i] = sc.nextInt();
        }

        for(int i = 2; i < 10; i++) {
            arr[i] = (arr[i - 2] + arr[i - 1]) % 10;
        }

        for(int i = 0; i < 10; i++) {
            if(i > 0) System.out.print(" ");
            System.out.print(arr[i]);
        }
    }
}