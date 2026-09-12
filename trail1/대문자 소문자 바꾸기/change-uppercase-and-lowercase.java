import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        StringBuilder sb = new StringBuilder();

        for(char ch : str.toCharArray()) {
            if(Character.isLowerCase(ch)) sb.append(Character.toUpperCase(ch));
            else sb.append(Character.toLowerCase(ch));
        }

        System.out.println(sb);
    }
}