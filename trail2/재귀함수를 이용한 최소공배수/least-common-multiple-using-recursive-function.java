import java.util.Scanner;

public class Main {
    static int gcd(int a, int b) {
        return b == 0 ? a : gcd(b, a % b);
    }
    
    static int lcm(int[] arr, int n) {
        if(n == 1) return arr[0];
        int prev = lcm(arr, n - 1);
        return (arr[n - 1] * prev) / gcd(arr[n - 1], prev);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        
        for(int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        System.out.println(lcm(arr, n));
    }
}