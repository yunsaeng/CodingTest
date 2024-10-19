function solution(diffs, times, limit) {
  let start = 1;
  let end = 100000;
  let answer = 0;
  while (start <= end) {
    let total = 0;
    let level = Math.floor((start + end) / 2);
    diffs.forEach((diff, index) => {
      if (level < diff)
        total +=
          (diff - level) * (times[index - 1] + times[index]) + times[index];
      else total += times[index];
    });
    if (total <= limit) {
      end = level - 1;
      answer = level;
    } else start = level + 1;
  }
  return answer;
}
