function solution(dartResult) {
  const answer = [];
  const points = dartResult.match(/\d+/g).map((point) => Number(point));
  const events = dartResult.match(/([A-Z][\W]*)/g);
  points.forEach((point, index) => {
    const event = events[index];
    const [bonus, option] = event.split("");

    if (bonus === "S") answer.push(point);
    else if (bonus === "D") answer.push(Math.pow(point, 2));
    else if (bonus === "T") answer.push(Math.pow(point, 3));

    if (option === "#") answer[index] *= -1;
    else if (option === "*") {
      answer[index] *= 2;
      if (index > 0) answer[index - 1] *= 2;
    }
  });

  return answer.reduce((acc, cur) => acc + cur, 0);
}
