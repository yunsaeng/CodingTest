import java.util.Scanner;

public class Main {
    public static void printRect(int n, int m) {
        for(int r = 0; r < n; r++) {
            for(int c = 0; c < m; c++) {
                System.out.print('1');
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int rowNum = sc.nextInt();
        int colNum = sc.nextInt();
        printRect(rowNum, colNum);
    }
}