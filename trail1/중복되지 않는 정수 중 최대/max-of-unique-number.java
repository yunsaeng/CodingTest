import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int[] arr = new int[1001];
        for(int i = 0; i < N; i++) arr[sc.nextInt()]++;

        int result = -1;
        for(int i = 1000; i >= 1; i--) {
            if(arr[i] == 1) {
                result = i;
                break;
            }
        }
        System.out.println(result);
    }
}