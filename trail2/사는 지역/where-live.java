import java.util.Scanner;

class User {
    String name, address, region;
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        User[] users = new User[n];
        for (int i = 0; i < n; i++) {
            users[i] = new User();
            users[i].name = sc.next();
            users[i].address = sc.next();
            users[i].region = sc.next();
        }

        int idx = 0;
        for(int i = 1; i < n; i++) {
            if(users[idx].name.compareTo(users[i].name) < 0) idx = i;
        }

        System.out.println("name " + users[idx].name);
        System.out.println("addr " + users[idx].address);
        System.out.println("city " + users[idx].region);
    }
}
