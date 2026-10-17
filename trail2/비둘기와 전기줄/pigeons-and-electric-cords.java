import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();

        int[] position = new int[11];
        boolean[] visited = new boolean[11];

        int ans = 0;

        for (int i = 0; i < N; i++) {
            int pigeon = sc.nextInt();
            int moveDir = sc.nextInt();

            if(!visited[pigeon]) visited[pigeon] = true;
            else {
                if(moveDir != position[pigeon]) ans++;
            }
            position[pigeon] = moveDir;
        }

        System.out.println(ans);
    }
}