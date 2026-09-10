import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int lineIdx = 1;
        for(String s : sc.nextLine().split(" ")) if(lineIdx++ % 2 == 1) System.out.println(s);
    }
}