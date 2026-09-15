import java.util.Arrays;
import java.util.Scanner;

class Student implements Comparable<Student>{
    String name;
    int score1, score2, score3;

    public Student(String name, int score1, int score2, int score3) {
        this.name = name;
        this.score1 = score1;
        this.score2 = score2;
        this.score3 = score3;
    }
    
    @Override
    public int compareTo(Student student) {
        return (this.score1 + this.score2 + this.score3) - (student.score1 + student.score2 + student.score3);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        Student[] students = new Student[n];
        for (int i = 0; i < n; i++) {
            students[i] = new Student(sc.next(), sc.nextInt(), sc.nextInt(), sc.nextInt());
        }
        
        Arrays.sort(students);

        for (Student student : students) System.out.printf("%s %d %d %d\n", student.name, student.score1, student.score2, student.score3);
    }
}