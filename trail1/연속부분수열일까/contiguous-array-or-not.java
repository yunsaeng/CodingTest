import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N1 = sc.nextInt(), N2 = sc.nextInt();
        if(N1 < N2) System.out.println("No");
        else {
            int[] A = new int[N1];
            for(int i = 0; i < N1; i++) A[i] = sc.nextInt();

            int[] B = new int[N2];
            for(int i = 0; i < N2; i++) B[i] = sc.nextInt();

            boolean isStraight = false;
            for(int i = 0; i <= N1 - N2; i++) {
                boolean match = true;
                for(int j = 0; j < N2; j++) {
                    if(A[i + j] != B[j]) {
                        match = false;
                        break;
                    }
                }
                if(match) {
                    isStraight = true;
                    break;
                }
            }

            System.out.println(isStraight ? "Yes" : "No");
        }
    }
}