import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        char[] chArr = sc.next().toCharArray();
        Arrays.sort(chArr);

        String str = new String(chArr);
        System.out.println(str);
    }
}