import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] cold = new String[3];
        int[] temp = new int[3];
        for(int i = 0; i < 3; i++) {
            cold[i] = sc.next();
            temp[i] = sc.nextInt();
        }

        int A = 0;
        for(int i = 0; i < 3; i++) {
            if(cold[i].equals("Y") && temp[i] >= 37) A++;
        }

        System.out.println(A >= 2 ? "E" : "N");
    }
}