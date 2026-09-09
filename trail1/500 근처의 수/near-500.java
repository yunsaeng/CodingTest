import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int min = 1000, max = 1;
        for(int i = 0; i < 10; i++) {
            int n = sc.nextInt();
            if(n < 500 && n > max) max = n;
            if(n > 500 && n < min) min = n;
        }
        System.out.print(max + " " + min);
    }
}