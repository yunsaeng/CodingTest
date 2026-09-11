import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char[] chArr = sc.next().toCharArray();
        for(char ch : chArr) {
            if(ch >= 'A' && ch <= 'Z') System.out.print(ch);
            else if(ch >= 'a' && ch <= 'z') System.out.print((char)((int)ch - 32));
        }
    }
}