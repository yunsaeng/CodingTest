function solution(name) {
  let answer = 0;
  for (let i = 0; i < name.length; i++)
    answer += Math.min(
      name.charCodeAt(i) - "A".charCodeAt(),
      "Z".charCodeAt() - name.charCodeAt(i) + 1
    );

  let min = name.length - 1;
  for (let i = 0; i < name.length; i++) {
    let next = i + 1;
    while (next < name.length && name[next] === "A") next++;

    const back = i + name.length - next + Math.min(i, name.length - next);
    min = Math.min(min, back);
  }
  answer += min;

  return answer;
}
