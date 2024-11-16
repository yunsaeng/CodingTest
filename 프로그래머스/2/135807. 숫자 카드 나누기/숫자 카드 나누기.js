const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

const calculateGCD = (array) => {
  return array.reduce((acc, cur) => gcd(acc, cur));
};

function solution(arrayA, arrayB) {
  let answer = 0;

  const gcdA = calculateGCD(arrayA);
  const gcdB = calculateGCD(arrayB);

  const isValid = (gcdValue, otherArray) => {
    return otherArray.every((num) => num % gcdValue !== 0);
  };

  if (isValid(gcdB, arrayA)) answer = Math.max(answer, gcdB);
  if (isValid(gcdA, arrayB)) answer = Math.max(answer, gcdA);

  return answer;
}
