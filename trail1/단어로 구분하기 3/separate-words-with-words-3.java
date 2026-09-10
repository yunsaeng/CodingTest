import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] strArr = sc.nextLine().split(" ");
        
        for(int i = strArr.length - 1; i >= 0; i--) System.out.println(strArr[i]);
    }
}