import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        char[] chArr = sc.next().toCharArray();
        int n = sc.nextInt();
        
        for(int i = 0; i < n; i++) {
            int q = sc.nextInt();

            if(q == 1) {
                int a = sc.nextInt(), b = sc.nextInt();
                char temp = chArr[a - 1];
                chArr[a - 1] = chArr[b - 1];
                chArr[b - 1] = temp;
            } else {
                String x = sc.next(), y = sc.next();
                char xChar = x.charAt(0);
                char yChar = y.charAt(0);
                
                for(int j = 0; j < chArr.length; j++) {
                    if(chArr[j] == xChar) chArr[j] = yChar;
                }
            }

            System.out.println(chArr);
        }
    }
}