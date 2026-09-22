import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();
        int m = sc.nextInt();
        char[][] arr = new char[n][m];
        
        for(int i = 0; i < n; i++) {
            arr[i] = sc.next().toCharArray();
        }
        
        int[] dr = {-1, -1, 0, 1, 1, 1, 0, -1};
        int[] dc = {0, 1, 1, 1, 0, -1, -1, -1};
        int result = 0;
        
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < m; j++) {
                if(arr[i][j] != 'L') continue;
                
                for(int d = 0; d < 8; d++) {
                    int e1i = i + dr[d];
                    int e1j = j + dc[d];
                    
                    if(e1i < 0 || e1i >= n || e1j < 0 || e1j >= m) continue;
                    if(arr[e1i][e1j] != 'E') continue;
                    
                    int e2i = e1i + dr[d];
                    int e2j = e1j + dc[d];
                    
                    if(e2i < 0 || e2i >= n || e2j < 0 || e2j >= m) continue;
                    if(arr[e2i][e2j] != 'E') continue;

                    result++;
                }
            }
        }
        
        System.out.println(result);
    }
}