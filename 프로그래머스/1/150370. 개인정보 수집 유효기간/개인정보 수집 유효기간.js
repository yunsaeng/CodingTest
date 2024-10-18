function solution(today, terms, privacies) {
  let answer = [];
  let expiresIn = {};
  const [t_year, t_month, t_day] = today.split(".").map(Number);

  terms.forEach((term) => {
    const [condition, month] = term.split(" ");
    expiresIn[condition] = Number(month);
  });

  privacies.forEach((privacy, index) => {
    const [datePart, p_condition] = privacy.split(" ");
    const [p_year, p_month, p_day] = datePart.split(".").map(Number);

    let month = p_month + expiresIn[p_condition];
    let year = p_year;

    if (month > 12) {
      year += Math.floor(month / 12);
      month %= 12;
      if (month === 0) {
        month = 12;
        year--;
      }
    }

    if (year < t_year) answer.push(index + 1);
    else if (year === t_year) {
      if (month < t_month) answer.push(index + 1);
      else if (month === t_month) {
        if (p_day <= t_day) answer.push(index + 1);
      }
    }
  });
  return answer;
}
