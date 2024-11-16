function solution(k, tangerine) {
  let answer = 0;
  let orangesMap = new Map();

  for (let i = 0; i < tangerine.length; i++) {
    if (orangesMap.has(tangerine[i]))
      orangesMap.set(tangerine[i], orangesMap.get(tangerine[i]) + 1);
    else orangesMap.set(tangerine[i], 1);
  }

  let orangesArray = [...orangesMap];
  orangesArray.sort((a, b) => b[1] - a[1]);

  while (k > 0) {
    k -= orangesArray[answer][1];
    answer++;
  }

  return answer;
}
