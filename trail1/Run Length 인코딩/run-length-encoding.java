import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        char[] chArr = sc.next().toCharArray();
        char ch = chArr[0];
        int cnt = 1;
        String result = "";
        for(int i = 1; i < chArr.length; i++) {
            if(ch != chArr[i]) {
                result += ch + "" + cnt;
                ch = chArr[i];
                cnt = 1;
            } else cnt++;
        }
        result += ch + "" + cnt;

        System.out.println(result.length());
        System.out.println(result);
    }
}