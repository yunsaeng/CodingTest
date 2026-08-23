import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        for(int i = 0; i < 4; i++) {
            int temp = 0;
            for(int j = 0; j < 4; j++) {
                temp += sc.nextInt();
            }
            System.out.println(temp);
        }
    }
}