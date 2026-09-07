import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        double sum = 0;
        for(int i = 0; i < N; i++) {
            double grade = sc.nextDouble();
            sum += grade;
        }
        double aver = sum / N;
        System.out.printf("%.1f\n", aver);
        if(aver >= 4) System.out.println("Perfect");
        else if(aver >= 3) System.out.println("Good");
        else System.out.println("Poor");
    }
}