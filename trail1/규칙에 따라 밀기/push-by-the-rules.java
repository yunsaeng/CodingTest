import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        StringBuilder sb = new StringBuilder(sc.next());
        int len = sb.length();
        char[] commands = sc.next().toCharArray();
        
        for(char command : commands) {
            if(command == 'L') {
                sb.append(sb.charAt(0));
                sb.deleteCharAt(0);
            } else if(command == 'R') {
                sb.insert(0, sb.charAt(len - 1));
                sb.deleteCharAt(len);
            } 
        }

        System.out.println(sb);
    }
}