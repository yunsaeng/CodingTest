function solution(t, p) {
  let answer = 0;
  const COMPARE_VALUE = Number(p);
  for (let i = 0; i <= t.length - p.length; i++) {
    const value = Number(t.slice(i, i + p.length));
    if (value <= COMPARE_VALUE) answer++;
  }
  return answer;
}
