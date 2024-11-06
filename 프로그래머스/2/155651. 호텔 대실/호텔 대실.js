function solution(book_time) {
  let answer = 0;
  let new_book_time = [];
  book_time.forEach((time) => {
    let [start, end] = time;
    const [startHours, startMinutes] = start.split(":").map((t) => Number(t));
    const [endHours, endMinutes] = end.split(":").map((t) => Number(t));
    new_book_time.push([
      startHours * 60 + startMinutes,
      endHours * 60 + endMinutes + 10,
    ]);
  });
  new_book_time.sort((a, b) => a[0] - b[0]);

  let use = [];
  new_book_time.forEach((time) => {
    const [start, end] = time;
    if (use.length === 0) {
      use.push(end);
      answer++;
    } else {
      use.sort((a, b) => a - b);
      if (use[0] <= start) {
        use.shift();
        use.push(end);
      } else {
        use.push(end);
        answer++;
      }
    }
  });
  return answer;
}
