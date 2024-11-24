function solution(topping) {
  let answer = 0;
  if (topping.length === 1) return answer;

  const setA = new Set();
  const setB = new Set();
  const toppingCount = new Array(10001).fill(0);

  topping.forEach((value) => {
    setA.add(value);
    toppingCount[value]++;
  });

  topping.forEach((value) => {
    if (toppingCount[value] > 0) toppingCount[value]--;
    if (toppingCount[value] === 0) setA.delete(value);
    setB.add(value);

    if (setA.size === setB.size) answer++;
  });
  return answer;
}
