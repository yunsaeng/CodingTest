function solution(s) {
  const tuples = s
    .slice(1, s.length - 1)
    .split("}")
    .map((e) => e.match(/\d+/g))
    .filter(Boolean)
    .sort((a, b) => a.length - b.length);

  const answer = [];
  tuples.forEach((tuple) => {
    tuple.forEach((e) => {
      const num = Number(e);
      if (!answer.includes(num)) answer.push(num);
    });
  });

  return answer;
}