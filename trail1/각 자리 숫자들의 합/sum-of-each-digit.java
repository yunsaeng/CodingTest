import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int sum = 0;
        for(char ch : Integer.toString(N).toCharArray()) sum += Character.getNumericValue(ch);
        System.out.println(sum);
    }
}