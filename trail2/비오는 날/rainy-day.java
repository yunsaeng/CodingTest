import java.util.Arrays;
import java.util.Scanner;

class Weather {
    String date, day, weather;

    public Weather(String date, String day, String weather) {
        this.date = date;
        this.day = day;
        this.weather = weather;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        Weather[] weathers = new Weather[n];
        for (int i = 0; i < n; i++) {
            String date = sc.next();
            String day = sc.next();
            String weather = sc.next();
            weathers[i] = new Weather(date, day, weather);
        }

        Weather[] result = Arrays.stream(weathers).filter(weather -> weather.weather.equals("Rain")).toArray(Weather[]::new);

        int idx = 0;
        for(int i = 0; i < result.length; i++) {
            if(result[idx].date.compareTo(result[i].date) > 0) idx = i;
        }

        System.out.printf("%s %s %s", result[idx].date, result[idx].day, result[idx].weather);
    }
}