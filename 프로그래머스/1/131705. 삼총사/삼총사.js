function solution(number) {
  let answer = 0;

  const combination = (current, index) => {
    if (current.length === 3) {
      answer += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
      return;
    }

    for (let i = index; i < number.length; i++)
      combination([...current, number[i]], i + 1);
  };

  combination([], 0);
  return answer;
}
