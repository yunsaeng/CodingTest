import java.util.Scanner;
public class Main {
    public static boolean isLeapYear(int y) {
        return (y % 4 == 0) && !(y % 100 == 0 && y % 400 != 0);
    }
    
    public static boolean isDate(int y, int m, int d) {
        int[] daysInMonth = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

        if(m < 1 || m > 12 || d < 1) return false;

        if(isLeapYear(y) && m == 2) return d <= 29;

        return d <= daysInMonth[m];
    }

    public static String getSeson(int y, int m, int d) {
        if(!isDate(y, m, d)) return "-1";
        
        if(m >= 3 && m <= 5) return "Spring";
        else if(m >= 6 && m <= 8) return "Summer";
        else if(m >= 9 && m <= 11) return "Fall";
        else return "Winter";
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int y = sc.nextInt();
        int m = sc.nextInt();
        int d = sc.nextInt();
        System.out.println(getSeson(y, m, d));
    }
}