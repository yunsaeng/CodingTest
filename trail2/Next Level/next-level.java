import java.util.Scanner;

class User {
    String id;
    int level;

    public User(String id, int level) {
        this.id = id;
        this.level = level;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String id = sc.next();
        int level = sc.nextInt();
        
        User user1 = new User("codetree", 10);
        User user2 = new User(id, level);
        
        System.out.printf("user %s lv %d\n", user1.id, user1.level);
        System.out.printf("user %s lv %d\n", user2.id, user2.level);
    }
}