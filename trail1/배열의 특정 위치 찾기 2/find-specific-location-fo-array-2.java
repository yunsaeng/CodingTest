import java.util.Scanner;
import java.lang.Math;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] arr = new int[10];

        for(int i = 0; i < 10; i++) arr[i] = sc.nextInt();
        System.out.println(Math.abs((arr[0] + arr[2] + arr[4] + arr[6] + arr[8]) - (arr[1] + arr[3] + arr[5] + arr[7] + arr[9])));
    }
}