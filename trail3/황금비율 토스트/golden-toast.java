import java.util.Scanner;
import java.util.LinkedList;
import java.util.ListIterator;

public class Main {
    public static int n, m;
    public static String s;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // 입력:
        n = sc.nextInt();
        m = sc.nextInt();
        s = sc.next();

        // 연결리스트 정의
        LinkedList<Character> l = new LinkedList<>();
        for(int i = 0; i < s.length(); i++)
            l.add(s.charAt(i));
        // Iterator 정의 (맨 끝 위치에서 시작하기 위해서는 listIterator안에 l.size() 필요)
        ListIterator<Character> it = l.listIterator(l.size());

        while(m-- > 0) {
            char command = sc.next().charAt(0);

            if(command == 'L') {
                if(it.hasPrevious()) // 빵들의 맨 앞이 아니라면
                    it.previous();   // 앞으로 이동합니다.
            } 
            else if(command == 'R') {
                if(it.hasNext())     // 빵들의 맨 뒤가 아니라면
                    it.next();       // 뒤로 이동합니다.
            }
            else if(command == 'D') {
                if(it.hasNext()) {   // 빵들의 맨 뒤가 아니라면
                    it.next();
                    it.remove();     // 바로 뒤에 있는 빵을 제거합니다.
                }
            }
            else if(command == 'P') {
                char c = sc.next().charAt(0);
                it.add(c);           // 가리키는 위치에 문자 c를 추가합니다.
            }    
        }

        // 출력:
        it = l.listIterator();
        while(it.hasNext())
            System.out.print(it.next());
    }
}
