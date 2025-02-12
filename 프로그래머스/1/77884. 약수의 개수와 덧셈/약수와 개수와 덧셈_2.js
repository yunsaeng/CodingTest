function solution(left, right) {
  let answer = 0;
  const getDivisor = (n) => {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        if (i === Math.sqrt(n)) count++;
        else count += 2;
      }
    }
    return count;
  };

  for (let num = left; num <= right; num++) {
    if (getDivisor(num) % 2 === 0) answer += num;
    else answer -= num;
  }

  return answer;
}
