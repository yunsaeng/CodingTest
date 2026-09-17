import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char[] binary = sc.next().toCharArray();
    
        int num = 0;
        for(char b : binary) num = num * 2 + Character.getNumericValue(b);
        System.out.println(num);
    }
}