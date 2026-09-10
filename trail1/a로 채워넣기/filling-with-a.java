import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        char[] chArr = sc.next().toCharArray();
        chArr[1] = 'a';
        chArr[chArr.length - 2] = 'a';
        System.out.println(chArr);
    }
}