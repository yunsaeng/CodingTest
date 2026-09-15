import java.util.Scanner;

class Product {
    String id;
    int code;

    public Product(String id, int code) {
        this.id = id;
        this.code = code;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String id2 = sc.next();
        int code2 = sc.nextInt();

        Product p1 = new Product("codetree", 50);
        Product p2 = new Product(id2, code2);

        System.out.printf("product %d is %s\n", p1.code, p1.id);
        System.out.printf("product %d is %s\n", p2.code, p2.id);
    }
}