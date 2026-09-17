import java.util.Scanner;

public class Main {
    static int[] num_of_days = {0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    static String[] day_of_week = {"Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"};

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int m1 = sc.nextInt(), d1 = sc.nextInt();
        int m2 = sc.nextInt(), d2 = sc.nextInt();
        String A = sc.next();
        int elapsedDays = 0, dayIdx = 0;

        for(int i = 0; i < day_of_week.length; i++) {
            if(A.equals(day_of_week[i])) {
                dayIdx = i;
                break;
            }
        }

        while(true) {
            if(m1 == m2 && d1 == d2) break;

            elapsedDays++;
            d1++;

            if(d1 > num_of_days[m1]) {
                m1++;
                d1 = 1;
            }
        }

        int weeks = elapsedDays / 7;
        System.out.println(elapsedDays % 7 >= dayIdx ? weeks + 1 : weeks);
    }
}