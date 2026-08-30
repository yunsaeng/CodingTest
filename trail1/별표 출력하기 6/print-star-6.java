import java.util.Scanner;

public class Main {
    static void printRepeat(String str, int count) {
        for(int i = 0; i < count; i++) {
            System.out.print(str);
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        for(int i = 0; i < 2 * N - 1; i++) {
            int spaces, stars;

            if(i < N) {
                spaces = i;
                stars = (N - i) * 2 - 1;
            } else {
                spaces = 2 * N - 2 - i;
                stars = (i - N) * 2 + 3;
            }

            printRepeat("  ", spaces);
            printRepeat("* ", stars);
            System.out.println();
        }
    }
}