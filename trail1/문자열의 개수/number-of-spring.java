import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] strArr = new String[200];
        String input;
        int idx = 0;

        while(!(input= sc.next()).equals("0")) strArr[idx++] = input;

        System.out.println(idx);
        for(int i = 0; i < idx; i+=2) System.out.println(strArr[i]);
    }
}