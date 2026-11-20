import java.util.Scanner;

public class Main {
    public static final int MAX_N = 100000;

    public static int n;
    public static int[] arr = new int[MAX_N];

    public static void heapify(int n, int i) {
        int largest = i;
        int l = i * 2 + 1;
        int r = i * 2 + 2;

        if(l < n && arr[l] > arr[largest]) largest = l;
        if(r < n && arr[r] > arr[largest]) largest = r;
        if(largest != i) {
            int temp = arr[i];
            arr[i] = arr[largest];
            arr[largest] = temp;
            heapify(n, largest);
        }
    }

    public static void heap_sort() {
        for(int i = n / 2 - 1; i >= 0; i--) heapify(n, i);

        for(int i = n - 1; i > 0; i--) {
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
            heapify(i, 0);
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        n = sc.nextInt();
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        heap_sort();

        for(int i = 0; i < n; i++) System.out.print(arr[i] + " ");
    }
}