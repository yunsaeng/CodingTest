import java.util.Arrays;
import java.util.Scanner;

class Student implements Comparable<Student>{
    String name;
    int korean, english, math;

    public Student(String name, int korean, int english, int math) {
        this.name = name;
        this.korean = korean;
        this.english = english;
        this.math = math;
    }
    
    @Override
    public int compareTo(Student student) {
        if(this.korean != student.korean) return student.korean - this.korean;
        if(this.english != student.english) return student.english - this.english;
        return student.math - this.math;
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

        for (Student student : students) System.out.printf("%s %d %d %d\n", student.name, student.korean, student.english, student.math);
    }
}