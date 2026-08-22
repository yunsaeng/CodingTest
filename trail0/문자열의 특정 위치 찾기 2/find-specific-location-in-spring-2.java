import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        String[] arr = {"apple", "banana", "grape", "blueberry", "orange"};
        Scanner sc = new Scanner(System.in);
        char alpha = sc.next().charAt(0);

        int result = 0;
        for(int i = 0; i < 5; i++) {
            if(arr[i].charAt(2) == alpha || arr[i].charAt(3) == alpha) {
                System.out.println(arr[i]);
                result++;
            }
        }
        System.out.println(result);
    }
}