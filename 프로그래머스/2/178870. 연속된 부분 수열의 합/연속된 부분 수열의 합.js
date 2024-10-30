function solution(sequence, k) {
  let answer = [0, 1000001];
  let temp = 0;
  let start = 0;
  let end = -1;

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] === k) {
      answer = [i, i];
      break;
    }
    if (temp <= k) {
      temp += sequence[i];
      end++;
    }
    while (temp > k) {
      temp -= sequence[start];
      start++;
    }
    if (temp === k)
      if (answer[1] - answer[0] > end - start) answer = [start, end];
  }
  return answer;
}
