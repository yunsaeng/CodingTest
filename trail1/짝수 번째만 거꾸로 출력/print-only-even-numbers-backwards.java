import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        char[] chArr = sc.next().toCharArray();
        for(int i = chArr.length - 1; i >= 0; i--) if(i % 2 == 1) System.out.print(chArr[i]);
    }
}