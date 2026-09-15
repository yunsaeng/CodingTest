import java.util.Scanner;
public class Main {
    public static void printAsc(int n) {
        if(n == 0) return;
        printAsc(n - 1);
        System.out.print(n + " ");
    }

    public static void printDes(int n) {
        if(n == 0) return;
        System.out.print(n + " ");
        printDes(n - 1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        printAsc(n);
        System.out.println();
        printDes(n);
    }
}