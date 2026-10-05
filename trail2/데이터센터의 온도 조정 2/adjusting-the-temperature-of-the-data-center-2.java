import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int c = sc.nextInt();
        int g = sc.nextInt();
        int h = sc.nextInt();
        int[] ta = new int[n];
        int[] tb = new int[n];
        int minTemp = Integer.MAX_VALUE;
        int maxTemp = Integer.MIN_VALUE;
        for (int i = 0; i < n; i++) {
            ta[i] = sc.nextInt();
            tb[i] = sc.nextInt();
            minTemp = Math.min(minTemp, ta[i]);
            maxTemp = Math.max(maxTemp, tb[i]);
        }
        
        int ans = Integer.MIN_VALUE;
        for(int temp = minTemp - 1; temp <= maxTemp + 1; temp++) {
            int work = 0;
            for(int i = 0; i < n; i++) {
                if(temp < ta[i]) work += c;
                else if(temp >= ta[i] && temp <= tb[i]) work += g;
                else work += h;
            }
            ans = Math.max(ans, work);
        }

        System.out.println(ans);
    }
}