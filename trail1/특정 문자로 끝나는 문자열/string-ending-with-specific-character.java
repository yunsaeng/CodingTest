import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] strArr = new String[10];
        for(int i = 0; i < 10; i++) strArr[i] = sc.next();

        char ch = sc.next().charAt(0);
        boolean isExist = false;
        for(String s : strArr) {
            if(s.charAt(s.length() - 1) == ch) {
                System.out.println(s);
                isExist = true;
            }
        }
        if(!isExist) System.out.println("None");
    }
}