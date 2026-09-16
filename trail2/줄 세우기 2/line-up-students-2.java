import java.util.Arrays;
import java.util.Scanner;

class Student implements Comparable<Student>{
    int height, weight, number;

    public Student(int height, int weight, int number) {
        this.height = height;
        this.weight = weight;
        this.number = number;
    }

    @Override
    public int compareTo(Student student) {
        if(this.height != student.height) return this.height - student.height;
        return student.weight - this.weight;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        Student[] students = new Student[n];
        for (int i = 0; i < n; i++) {
            students[i] = new Student(sc.nextInt(), sc.nextInt(), i + 1);
        }

        Arrays.sort(students);
        for(Student student : students) System.out.printf("%d %d %d\n", student.height, student.weight, student.number);
    }
}