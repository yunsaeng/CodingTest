function solution(today, terms, privacies) {
  let answer = [];
  let expiresIn = {};
  const [year, month, day] = today.split(".").map(Number);
  const today_stamp = year * 12 * 28 + month * 28 + day;

  terms.forEach((term) => {
    const [condition, month] = term.split(" ");
    expiresIn[condition] = Number(month);
  });

  privacies.forEach((privacy, index) => {
    let [date, condition] = privacy.split(" ");
    date = date.split(".").map(Number);
    const expires_stamp =
      date[0] * 12 * 28 + date[1] * 28 + date[2] + expiresIn[condition] * 28;

    if (today_stamp >= expires_stamp) answer.push(index + 1);
  });
  return answer;
}
