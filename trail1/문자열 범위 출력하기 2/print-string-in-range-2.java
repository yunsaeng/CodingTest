import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        char[] chArr = sc.next().toCharArray();
        int len = sc.nextInt();
        for(int i = chArr.length - 1; i >= (chArr.length - len < 0 ? 0 : chArr.length - len); i--) System.out.print(chArr[i]);
    }
}