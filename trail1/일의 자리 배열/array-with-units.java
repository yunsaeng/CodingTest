import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] arr = new int[10];
        arr[0] = sc.nextInt();
        arr[1] = sc.nextInt();

        for(int i = 2; i < 10; i++) arr[i] = (arr[i - 2] + arr[i - 1]) % 10;
        for(int i = 0; i < 10; i++) System.out.print(arr[i] + " ");
    }
}