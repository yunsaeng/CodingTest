import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String str = sc.next();
        
        boolean exists = false;
        for(int i = 0; i < str.length() - 1; i++) {
            if(str.substring(i, i + 2).equals("ee")) {
                exists = true;
                break;
            }
        }
        System.out.print((exists ? "Yes" : "No") + " ");

        exists = false;
        for(int i = 0; i < str.length() - 1; i++) {
            if(str.substring(i, i + 2).equals("ab")) {
                exists = true;
                break;
            }
        }
        System.out.print((exists ? "Yes" : "No") + " ");
    }
}