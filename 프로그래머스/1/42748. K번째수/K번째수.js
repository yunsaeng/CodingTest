function solution(array, commands) {
  const answer = [];
  commands.forEach((command) => {
    const [start, end, index] = command;
    const value = [...array]
      .splice(start - 1, end - start + 1)
      .sort((a, b) => a - b)[index - 1];
    answer.push(value);
  });
  return answer;
}
