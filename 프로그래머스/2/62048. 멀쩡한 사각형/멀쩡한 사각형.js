function solution(w, h) {
  const getGCD = (a, b) => {
    if (b === 0) return a;
    return getGCD(b, a % b);
  };
  const gcd = getGCD(Math.max(w, h), Math.min(w, h));
  const miniW = w / gcd;
  const miniH = h / gcd;
  let answer = miniH * miniW;
  for (let y = 1; y <= miniH; y++)
    answer -= (miniW - Math.ceil((miniW * y) / miniH)) * 2;
  return w * h - answer * gcd;
}