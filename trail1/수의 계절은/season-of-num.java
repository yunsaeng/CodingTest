import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int M = sc.nextInt();
        
        if(M >= 3 && M <= 5) System.out.println("Spring");
        else if(M >= 6 && M <= 8) System.out.println("Summer");
        else if(M >= 9 && M <= 11) System.out.println("Fall");
        else System.out.println("Winter");
    }
}