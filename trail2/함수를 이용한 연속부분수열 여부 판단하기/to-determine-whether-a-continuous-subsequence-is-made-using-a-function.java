import java.util.Scanner;
public class Main {
    public static boolean isSubarray(int[] a, int[] b) {
        for(int i = 0; i <= a.length - b.length; i++) {
            boolean match = true;
            for(int j = 0; j < b.length; j++) {
                if(a[i + j] != b[j]) {
                    match = false;
                    break;
                }
            }
            if(match) return true;
        }
        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n1 = sc.nextInt();
        int n2 = sc.nextInt();
        int[] a = new int[n1];
        int[] b = new int[n2];
        for (int i = 0; i < n1; i++)
            a[i] = sc.nextInt();
        for (int i = 0; i < n2; i++)
            b[i] = sc.nextInt();
        System.out.println(isSubarray(a, b) ? "Yes" : "No");
    }
}