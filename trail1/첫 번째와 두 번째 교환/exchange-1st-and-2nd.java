import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        char[] chArr = sc.next().toCharArray();
        char first = chArr[0];
        char second = chArr[1];

        for(int i = 0; i < chArr.length; i++) {
            if(chArr[i] == first) chArr[i] = second;
            else if(chArr[i] == second) chArr[i] = first;
        }
        
        System.out.println(chArr);
    }
}