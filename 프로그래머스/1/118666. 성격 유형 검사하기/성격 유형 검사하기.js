function solution(survey, choices) {
  const MBTI = {};
  const types = ["RT", "CF", "JM", "AN"];

  types.forEach((type) => type.split("").forEach((char) => (MBTI[char] = 0)));

  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index];
    MBTI[choice > 4 ? agree : disagree] += Math.abs(4 - choice);
  });
    
  return types.map(([a, b]) => (MBTI[a] < MBTI[b] ? b : a)).join("");
}