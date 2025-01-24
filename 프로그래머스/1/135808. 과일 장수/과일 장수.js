function solution(k, m, score) {
  let answer = 0;
  const rest = score.length % m;
  score = score.sort((a, b) => b - a).slice(0, score.length - rest);
  for (let i = 0; i < score.length; i += m) answer += score[i + m - 1] * m;
  return answer;
}