import java.util.Scanner;

public class Main {
    public static final int INT_MIN = Integer.MAX_VALUE;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] a = new int[n];
        for (int i = 0; i < n; i++) {
            a[i] = sc.nextInt();
        }
        
        int minVal = INT_MIN;
        for(int i = 0; i < n; i++) {
            int dist = 0;
            for(int j = 0; j < n; j++) {
                dist += Math.abs(j - i) * a[j];
            }
            if(minVal > dist) minVal = dist;
        }

        System.out.println(minVal);
    }
}