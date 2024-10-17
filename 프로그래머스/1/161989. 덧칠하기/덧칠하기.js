function solution(n, m, section) {
  let answer = 0;
  let pos_section = [...section];

  while (pos_section.length !== 0) {
    const paint_goal = pos_section[0] + m - 1;
    while (pos_section[0] <= paint_goal && pos_section.length !== 0) {
      pos_section.shift();
    }
    answer++;
  }
  return answer;
}
