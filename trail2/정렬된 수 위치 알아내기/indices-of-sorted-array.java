import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        Integer[] indices = new Integer[n];
        for (int i = 0; i < n; i++) {
            indices[i] = i;
        }
        
        Arrays.sort(indices, (a, b) -> {
            if(arr[a] != arr[b]) return arr[a] - arr[b];
            return a - b;
        });
        
        int[] result = new int[n];
        for (int i = 0; i < n; i++) {
            result[indices[i]] = i + 1;
        }
        
        for (int i = 0; i < n; i++) {
            System.out.print(result[i] + " ");
        }
    }
}