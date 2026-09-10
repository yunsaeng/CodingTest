import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        String result = "";
        for(int i = 0; i < n; i++) result += sc.next();
        System.out.println(result);
    }
}