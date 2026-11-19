import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        ArrayList<Integer> v = new ArrayList<>();

        for(int i = 0; i < n; i++) {
            String s = sc.next();
            if(s.equals("push_back")) {
                int num = sc.nextInt();
                v.add(num);
            } else if(s.equals("get")) {
                int idx = sc.nextInt();
                System.out.println(v.get(idx - 1));
            } else if(s.equals("size")) {
                System.out.println(v.size());
            } else if(s.equals("pop_back")) {
                v.remove(v.size() - 1);
            }
        }
    }
}