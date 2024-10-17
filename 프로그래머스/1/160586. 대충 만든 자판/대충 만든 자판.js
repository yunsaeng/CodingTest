function solution(keymap, targets) {
  let answer;
  let result = [];
  const DEFAULT_MAX = 1000;

  for (const target of targets) {
    let isWrong = false;
    let totalCount = 0;
    for (const t of target) {
      let count = DEFAULT_MAX;
      for (const key of keymap) {
        const temp = key.indexOf(t);
        if (temp < count && temp > -1) count = temp;
      }
      if (count === DEFAULT_MAX) {
        isWrong = true;
        break;
      }
      totalCount += count+1;
    }
    if (isWrong) result.push(-1);
    else result.push(totalCount);
  }

  answer = [...result];

  return answer;
}
