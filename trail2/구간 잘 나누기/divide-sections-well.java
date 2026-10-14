import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++)
            nums[i] = sc.nextInt();
        
        int ans = 10000;
        for(int max = 1; max <= 10000; max++) {
            boolean possible = true;
            int section = 1;

            int cnt = 0;
            for(int j = 0; j < n; j++) {
                if(nums[j] > max) {
                    possible = false;
                    break;
                }

                if(cnt + nums[j] > max) {
                    cnt = 0;
                    section++;
                }

                cnt += nums[j];
            }

            if(possible && section <= m) {
                ans = max;
                break;
            }
        }

        System.out.println(ans);
    }
}