import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;

class User {
    char codeName;
    int score;
}

public class Main {
    public static final int MAX_N = 5;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        User[] users = new User[MAX_N];
        for (int i = 0; i < MAX_N; i++) {
            users[i] = new User();
            users[i].codeName = sc.next().charAt(0);
            users[i].score = sc.nextInt();
        }

        int min = 101, minIdx = -1;
        for(int i = 0; i < MAX_N; i++) {
            if(min > users[i].score) {
                min = users[i].score;
                minIdx = i;
            }
        }

        System.out.println(users[minIdx].codeName + " " + users[minIdx].score);
    }
}
