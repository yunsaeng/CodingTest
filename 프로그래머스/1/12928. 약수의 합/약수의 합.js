function solution(n) {
  let answer = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (i === Math.sqrt(n)) answer += i;
      else answer += i + n / i;
    }
  }
  return answer;
}