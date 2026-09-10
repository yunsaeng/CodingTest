import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        StringBuilder sb = new StringBuilder(sc.next());
        int len = sb.length();
        int n = sc.nextInt();
        
        for(int i = 0; i < n; i++) {
            int q = sc.nextInt();

            if(q == 1) {
                sb.append(sb.charAt(0));
                sb.deleteCharAt(0);
            } else if(q == 2) {
                sb.insert(0, sb.charAt(len - 1));
                sb.deleteCharAt(len);
            } else {
                sb.reverse();
            }

            System.out.println(sb);
        }
    }
}