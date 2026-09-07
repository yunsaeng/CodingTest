import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] arr = new int[100];

        for(int i = 0; i < 100; i++) {
            int num = sc.nextInt();
            if(num == 0) {
                System.out.println(arr[i - 3] + arr[i - 2] + arr[i - 1]);
                break;
            }
            arr[i] = num;
        }
    }
}