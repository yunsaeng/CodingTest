import java.util.Scanner;

public class Main {
    static int[] num_of_days = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    static String[] day_of_week = {"Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"};

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int m1 = sc.nextInt(), d1 = sc.nextInt();
        int m2 = sc.nextInt(), d2 = sc.nextInt();

        boolean isAfter = m1 > m2 || (m1 == m2 && d1 > d2);

        int elapsedDays = 0;
        int currentM = isAfter ? m2 : m1;
        int currentD = isAfter ? d2 : d1;
        int targetM = isAfter ? m1 : m2;
        int targetD = isAfter ? d1 : d2;

        while(true) {
            if(currentM == targetM && currentD == targetD) break;

            elapsedDays++;
            currentD++;

            if(currentD > num_of_days[currentM]) {
                currentM++;
                currentD = 1;
            }
        }

        int dayIndex = isAfter ? (7 - (elapsedDays % 7)) % 7 : elapsedDays % 7;
        System.out.println(day_of_week[dayIndex]);
    }
}