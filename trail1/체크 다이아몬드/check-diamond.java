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
                spaces = N - i - 1;
                stars = i + 1;

                printRepeat(" ", spaces);
                printRepeat("* ", stars);
            } else {
                spaces = N - ((N - 1) * 2 - i) - 1;
                stars = ((N - 1) * 2 - i) + 1;

                printRepeat(" ", spaces);
                printRepeat("* ", stars);
            }
            
            System.out.println();
        }
    }
}