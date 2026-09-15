import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[2 * n];
        for (int i = 0; i < 2 * n; i++) {
            nums[i] = sc.nextInt();
        }
        
        Arrays.sort(nums);

        int max = 0;
        for(int i = 0; i < n; i++) {
            int groupSum = nums[i] + nums[n * 2 - i - 1];
            max = Math.max(max, groupSum);
        }
        System.out.println(max);
    }
}