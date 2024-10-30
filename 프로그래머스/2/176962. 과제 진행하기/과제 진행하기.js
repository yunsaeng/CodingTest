function solution(plans) {
  let answer = [];
  let newPlans = [];
  let stop = [];
  let rest = [];

  for (const [name, start, playtime] of plans) {
    const [hour, minute] = start.split(":").map((s) => Number(s));
    const startTime = 60 * hour + minute;
    newPlans.push([name, startTime, Number(playtime)]);
  }

  newPlans.sort((a, b) => {
    return a[1] - b[1];
  });

  for (let i = 0; i < newPlans.length - 1; i++) {
    const [posName, posStart, posPlaytime] = newPlans[i];
    const [nextName, nextStart, nextPlaytime] = newPlans[i + 1];

    if (posStart + posPlaytime <= nextStart) {
      answer.push(posName);
      let posTime = posStart + posPlaytime;
      while (posTime <= nextStart && stop.length > 0) {
        posTime += rest.pop();
        if (posTime > nextStart) rest.push(posTime - nextStart);
        else answer.push(stop.pop());
      }
    } else {
      stop.push(posName);
      rest.push(posStart + posPlaytime - nextStart);
    }
    if (i + 1 === newPlans.length - 1) answer.push(nextName);
  }

  while (stop.length > 0) answer.push(stop.pop());

  return answer;
}
