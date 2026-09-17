import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        int k = sc.nextInt();
        int[] penalizedStudents = new int[n + 1];
        int result = -1;
        for (int i = 0; i < m; i++) {
            int penalizedStudent = sc.nextInt();
            penalizedStudents[penalizedStudent]++;
            if(penalizedStudents[penalizedStudent] >= k) {
                result = penalizedStudent;
                break;
            }
        }
        System.out.println(result);
    }
}