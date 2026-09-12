import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt(), B = sc.nextInt();
        int cnt = 0;
        for(char ch : Integer.toString(A + B).toCharArray()) if(ch == '1') cnt++;
        System.out.println(cnt);
    }
}