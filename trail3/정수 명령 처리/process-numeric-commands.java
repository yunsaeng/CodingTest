import java.util.Scanner;
import java.util.Stack;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        Stack<Integer> s = new Stack<>();

        for(int i = 0; i < n; i++) {
            String command = sc.next();

            if(command.equals("push")) {
                int data = sc.nextInt();
                s.push(data);
            } else if(command.equals("pop")) {
                System.out.println(s.pop());
            } else if(command.equals("size")) {
                System.out.println(s.size());
            } else if(command.equals("empty")) {
                System.out.println(s.empty() ? 1 : 0);
            } else {
                System.out.println(s.peek());
            }
        }
    }
}