import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char[] A = sc.next().toCharArray();
        
        int cnt = 0;
        for(int i = 0; i < A.length; i++) {
            if(A[i] != '(') continue;

            for(int j = i + 1; j < A.length; j++) {
                if(A[j] == ')') {
                    cnt++;
                }
            }
        }

        System.out.println(cnt);
    }
}