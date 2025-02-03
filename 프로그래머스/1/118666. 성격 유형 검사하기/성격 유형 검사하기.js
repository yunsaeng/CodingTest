function solution(survey, choices) {
  const MBTI = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  for (let i = 0; i < survey.length; i++) {
    if (choices[i] > 4) MBTI[survey[i][1]] += choices[i] - 4;
    else MBTI[survey[i][0]] += 4 - choices[i];
  }
  const answer = [];
  if (MBTI.R < MBTI.T) answer.push("T");
  else answer.push("R");
  if (MBTI.C < MBTI.F) answer.push("F");
  else answer.push("C");
  if (MBTI.J < MBTI.M) answer.push("M");
  else answer.push("J");
  if (MBTI.A < MBTI.N) answer.push("N");
  else answer.push("A");
  return answer.join("");
}
