public class Main {
    public static void main(String[] args) {
        int[][] arr = new int[5][5];
        for(int r = 0; r < 5; r++) arr[r][0] = 1;
        for(int c = 0; c < 5; c++) arr[0][c] = 1;
        for(int r = 1; r < 5; r++) {
            for(int c = 1; c < 5; c++) {
                arr[r][c] = arr[r-1][c] + arr[r][c-1];
            }
        }

        for(int r = 0; r < 5; r++) {
            for(int c = 0; c < 5; c++) {
                System.out.print(arr[r][c] + " ");
            }
            System.out.println();
        }
    }
}