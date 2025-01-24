function solution(babbling) {
  const pronunciation = ["aya", "ye", "woo", "ma"];
  let answer = 0;
  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < pronunciation.length; j++) {
      if (babbling[i].includes(pronunciation[j].repeat(2))) break;
      babbling[i] = babbling[i].replaceAll(pronunciation[j], "0");
    }
    if (babbling[i].replaceAll(0, "").length === 0) answer++;
  }
  return answer;
}
