function solution(targets) {
  let answer = 0;
  targets.sort((a, b) => a[1] - b[1]);

  let lastAttack = -1;

  targets.forEach(([start, end]) => {
    if (start > lastAttack) {
      answer++;
      lastAttack = end - 1;
    }
  });

  return answer;
}