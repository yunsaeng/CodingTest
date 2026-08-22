import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int result = 1;
        int temp = 0;

        for(;result <= 100; result++) {
            temp += result;
            if(temp >= N) break;
        }

        System.out.println(result);
    }
}