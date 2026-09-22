import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++)
            arr[i] = sc.nextInt();
        
        int cnt = 0;
        for(int i = 0; i < n; i++) {
            for(int k = i + 1; k < n; k++) {
                for(int j = i + 1; j < k; j++) {
                    if(arr[i] <= arr[j] && arr[j] <= arr[k]) cnt++;
                }
            }
        }

        System.out.println(cnt);
    }
}