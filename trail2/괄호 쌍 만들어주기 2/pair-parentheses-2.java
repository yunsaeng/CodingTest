import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char[] A = sc.next().toCharArray();
        
        int n = A.length;
        int cnt = 0;
        for(int i = 0; i < n - 1; i++) {
            if(!(A[i] == '(' && A[i + 1] == '(')) continue;

            for(int j = i + 2; j < n - 1; j++) {
                if(A[j] == ')' && A[j + 1] == ')') cnt++;
            }
        }

        System.out.println(cnt);
    }
}