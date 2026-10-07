import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static final int MAX_V = 40;

    public static int[] arr = new int[15];

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        for (int i = 0; i < 15; i++) {
            arr[i] = sc.nextInt();
        }
        Arrays.sort(arr);

        for(int a = 1; a <= MAX_V; a++) {
            for(int b = a; b <= MAX_V; b++) {
                for(int c = b; c <= MAX_V; c++) {
                    for(int d = c; d <= MAX_V; d++) {
                        int[] sums = new int[15];

                        int idx = 0;
                        
                        sums[idx++] = a;
                        sums[idx++] = b;
                        sums[idx++] = c;
                        sums[idx++] = d;
                        
                        sums[idx++] = a + b;
                        sums[idx++] = a + c;
                        sums[idx++] = a + d;
                        sums[idx++] = b + c;
                        sums[idx++] = b + d;
                        sums[idx++] = c + d;
                        
                        sums[idx++] = a + b + c;
                        sums[idx++] = a + b + d;
                        sums[idx++] = a + c + d;
                        sums[idx++] = b + c + d;
                        
                        sums[idx++] = a + b + c + d;
                        
                        Arrays.sort(sums);

                        if(Arrays.equals(arr, sums)) {
                            System.out.printf("%d %d %d %d", a, b, c, d);
                            return;
                        }
                    }
                }
            }
        }
    }
}