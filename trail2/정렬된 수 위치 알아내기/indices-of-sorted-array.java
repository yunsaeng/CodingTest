import java.util.Arrays;
import java.util.Scanner;

class Element{
    int num, prev, move;
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        Element[] sequence = new Element[n];
        for (int i = 0; i < n; i++) {
            sequence[i] = new Element();
            sequence[i].num = sc.nextInt();
            sequence[i].prev = i + 1;
        }

        Arrays.sort(sequence, (a, b) -> {
            if(a.num != b.num) return a.num - b.num;
            return a.prev - b.prev;
        });
        for (int i = 0; i < n; i++) {
            sequence[i].move = i + 1;
        }

        Arrays.sort(sequence, (a, b) -> a.prev - b.prev);
        for(Element e : sequence) System.out.print(e.move + " ");
    }
}
