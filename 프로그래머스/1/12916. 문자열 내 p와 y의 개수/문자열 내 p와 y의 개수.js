function solution(s) {
  const p = (s.match(/[pP]/g) || []).length;
  const y = (s.match(/[yY]/g) || []).length;
  return p === y;
}