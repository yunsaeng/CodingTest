import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int classroom = 0;
        int corridor = 0;
        int toilet = 0;
        for(int i = 1; i <= n; i++) {
            if(i % 12 == 0) toilet++;
            else if(i % 3 == 0) corridor++;
            else if(i % 2 == 0) classroom++;
        }
        System.out.printf("%d %d %d", classroom, corridor, toilet);
    }
}