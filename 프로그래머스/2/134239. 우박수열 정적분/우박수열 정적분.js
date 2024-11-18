function solution(k, ranges) {
  const sequence = [];
  sequence.push(k);
  while (k !== 1) {
    if (k % 2 === 0) k /= 2;
    else k = k * 3 + 1;
    sequence.push(k);
  }

  const areas = [];
  for (let i = 1; i < sequence.length; i++) {
    const area = (sequence[i - 1] + sequence[i]) / 2;
    areas.push(area);
  }

  const answer = [];
  ranges.forEach((range) => {
    const [start, endRange] = range;
    const end = sequence.length + endRange - 1;
    if (start > end) answer.push(-1);
    else if (start === end) answer.push(0);
    else {
      let sum = 0;
      for (let i = start; i < end; i++) sum += areas[i];
      answer.push(sum);
    }
  });

  return answer;
}