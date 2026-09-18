import java.util.Scanner;

public class Main {
    static final int MAX_TIME = 1000001;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int m = sc.nextInt();
        int totalTime = 0;

        int[] A = new int[MAX_TIME];
        for (int i = 0; i < n; i++) {
            int v = sc.nextInt();
            int t = sc.nextInt();

            for(int j = totalTime + 1; j <= totalTime + t; j++) {
                A[j] = A[j - 1] + v;
            }
            totalTime += t;
        }

        int[] B = new int[MAX_TIME];
        totalTime = 0;
        for (int i = 0; i < m; i++) {
            int v = sc.nextInt();
            int t = sc.nextInt();

            for(int j = totalTime + 1; j <= totalTime + t; j++) {
                B[j] = B[j - 1] + v;
            }
            totalTime += t;
        }

        int cnt = 0;
        String head = null;
        for(int t = 1; t <= totalTime; t++) {
            if(A[t] > B[t]) {
                if(head == null || !head.equals("A")) cnt++;
                head = "A";
            } else if(A[t] < B[t]) {
                if(head == null || !head.equals("B")) cnt++; 
                head = "B";
            } else {
                if(head == null || !head.equals("AB")) cnt++; 
                head = "AB";
            }
        }

        System.out.println(cnt);
    }
}