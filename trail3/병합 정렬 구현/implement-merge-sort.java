import java.util.Scanner;

public class Main {
    public static final int MAX_N = 100000;

    public static int n;
    public static int[] arr = new int[MAX_N];
    public static int[] merged_arr = new int[MAX_N];

    public static void merge_sort(int low, int high) {
        if (low < high) {
            int mid = (low + high) / 2;
            merge_sort(low, mid);
            merge_sort(mid + 1, high);
            merge(low, mid, high);
        }
    }

    public static void merge(int low, int mid, int high) {
        int i = low, j = mid + 1;
        int k = low;
        while (i <= mid && j <= high) {
            if (arr[i] <= arr[j]) merged_arr[k++] = arr[i++];
            else merged_arr[k++] = arr[j++];
        }

        while (i <= mid) merged_arr[k++] = arr[i++];
        while (j <= high) merged_arr[k++] = arr[j++];

        for (k = low; k <= high; k++) arr[k] = merged_arr[k];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        n = sc.nextInt();
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        merge_sort(0, n - 1);

        for(int i = 0; i < n; i++) System.out.print(arr[i] + " ");
    }
}