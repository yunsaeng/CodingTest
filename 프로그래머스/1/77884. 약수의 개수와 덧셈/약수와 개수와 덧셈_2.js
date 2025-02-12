function solution(left, right) {
  let answer = 0;
  for (let num = left; num <= right; num++) {
    if (Number.isInteger(Math.sqrt(num))) answer -= num;
    else answer += num;
  }
  return answer;
}
