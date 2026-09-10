import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String str = sc.next();
        
        int cnt = 0;
        for(int i = 0; i < str.length() - 1; i++)  if(str.substring(i, i + 2).equals("ee")) cnt++;
        System.out.print(cnt + " ");

        cnt = 0;
        for(int i = 0; i < str.length() - 1; i++) if(str.substring(i, i + 2).equals("eb")) cnt++;
        System.out.print(cnt + " ");
    }
}