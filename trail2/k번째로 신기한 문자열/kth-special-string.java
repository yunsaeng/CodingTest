import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int k = sc.nextInt();
        String t = sc.next();
        String[] words = new String[n];
        for (int i = 0; i < n; i++) {
            words[i] = sc.next();
        }
        
        String[] result = Arrays.stream(words)
                                .filter(word -> word.startsWith(t))
                                .sorted()
                                .toArray(String[]::new);
        System.out.println(result[k - 1]);
    }
}