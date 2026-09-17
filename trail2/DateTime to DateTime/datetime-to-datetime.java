import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt(), B = sc.nextInt(), C = sc.nextInt();
        int day = 11, hour = 11, minute = 11;
        int elapsedTime = 0;

        boolean isLater = (day > A) || 
                        (day == A && hour > B) || 
                        (day == A && hour == B && minute > C);

        if(isLater) {
            System.out.println(-1);
            return;
        }

        while(true) {
            if(day == A && hour == B && minute == C) break;

            elapsedTime++;
            minute++;

            if(minute == 60) {
                hour++;
                minute = 0;
            }

            if(hour == 24) {
                day++;
                hour = 0;
            }
        }

        System.out.println(elapsedTime);
    }
}