import java.util.Arrays;
import java.util.Scanner;

class Point implements Comparable<Point>{
    int num, x, y;

    public Point(int num, int x, int y) {
        this.num = num;
        this.x = x;
        this.y = y;
    }

    @Override
    public int compareTo(Point point) {
        int distance = Math.abs(this.x) + Math.abs(this.y);
        int compare = Math.abs(point.x) + Math.abs(point.y);

        if(distance != compare) return distance - compare;
        return this.num - point.num;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        Point[] points = new Point[n];
        for (int i = 0; i < n; i++) {
            points[i] = new Point(i + 1, sc.nextInt(), sc.nextInt());
        }

        Arrays.sort(points);
        for(Point point : points) System.out.println(point.num);
    }
}