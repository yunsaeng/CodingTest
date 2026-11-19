import java.util.LinkedList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        LinkedList<Integer> l = new LinkedList<Integer>();
        for (int i = 0; i < n; i++) {
            String command = sc.next();
            
            if(command.equals("push_front")) {
                int data = sc.nextInt();
                l.addFirst(data);
            } else if(command.equals("push_back")) {
                int data = sc.nextInt();
                l.addLast(data);
            } else if(command.equals("pop_front")) {
                int data = l.pollFirst();
                System.out.println(data);
            } else if(command.equals("pop_back")) {
                int data = l.pollLast();
                System.out.println(data);
            } else if(command.equals("size")) {
                System.out.println(l.size());
            } else if(command.equals("empty")) {
                System.out.println(l.isEmpty() ? 1 : 0);
            } else if(command.equals("front")) {
                System.out.println(l.peekFirst());
            } else {
                System.out.println(l.peekLast());
            }
        }
    }
}