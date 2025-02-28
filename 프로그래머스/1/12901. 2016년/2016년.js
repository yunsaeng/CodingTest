function solution(a, b) {
  const MonthToDays = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  return DAYS[
    (MonthToDays.splice(0, a).reduce((acc, cur) => acc + cur, 0) + b) % 7
  ];
}
