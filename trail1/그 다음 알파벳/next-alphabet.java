import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char ch = sc.next().charAt(0);
        
        int offset = ch - 'a';
        int rotated = (offset + 1) % 26;
        char result = (char)('a' + rotated);
        
        System.out.println(result);
    }
}