import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.next().charAt(0) - 'A';
        }
        
        int result = 0;
        for(int i = 0; i < n; i++) {
            if(arr[i] == i) continue;

            int p = -1;
            for(int j = i + 1; j < n; j++) {
                if(arr[j] == i) {
                    p = j;
                    break;
                }
            }

            for(int j = p; j > i; j--) {
                int temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
                result++;
            }
        }

        System.out.println(result);
    }
}