import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();

        int sum = 0;
        for(char ch : str.toCharArray()) {
            if(Character.isDigit(ch)) sum += Character.getNumericValue(ch);
        }

        System.out.println(sum);
    }
}