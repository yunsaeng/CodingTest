import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int k = sc.nextInt();
        
        char[] arr = new char[10001];
        for (int i = 0; i < n; i++) {
            int pos = sc.nextInt();
            char c = sc.next().charAt(0);
            arr[pos] = c;
        }

        int result = Integer.MIN_VALUE;
        for(int i = 0; i <= 10000 - k; i++) {
            int sum = 0;
            for(int j = i; j <= i + k; j++) {
                if(arr[j] == 0) continue;
                
                if(arr[j] == 'G') sum+=1;
                else sum+=2;
            }
            result = Math.max(result, sum);
        }

        System.out.println(result);
    }
}