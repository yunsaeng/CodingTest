public class Main {
    public static void main(String[] args) {
        int a = 1, b = 2, c = 3;

        a = c;
        b = c;

        System.out.printf("%d %d %d", a, b, c);
    }
}