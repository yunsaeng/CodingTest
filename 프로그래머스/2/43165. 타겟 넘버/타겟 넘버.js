function solution(numbers, target) {
  let answer = 0;
  const bt = (idx, cur) => {
    if (idx === numbers.length) {
      if (cur === target) answer++;
      return;
    }
    bt(idx + 1, cur + numbers[idx]);
    bt(idx + 1, cur - numbers[idx]);
  };
  bt(0, 0);
  return answer;
}