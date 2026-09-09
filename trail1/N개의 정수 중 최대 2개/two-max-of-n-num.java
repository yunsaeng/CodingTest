import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        Integer[] arr = new Integer[N];
        for(int i = 0; i < N; i++) arr[i] = sc.nextInt();
        Arrays.sort(arr, Comparator.reverseOrder());
        System.out.println(arr[0] + " " + arr[1]);
    }
}