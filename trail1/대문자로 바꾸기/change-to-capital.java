import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        for(int i = 0; i < 5; i++) {
            for(int j = 0; j < 3; j++) {
                System.out.print(sc.next().toUpperCase() + " ");
            }
            System.out.println();
        }
    }
}