import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        char[] a = sc.next().toCharArray();
        int n = a.length;

        int idx = 0;
        for(; idx < n; idx++) {
            if(a[idx] == '0') {
                a[idx] = '1';
                break;
            }
        }

        int num = Integer.parseInt(String.valueOf(a), 2);
        System.out.println(idx == n ? num - 1 : num);
    }
}