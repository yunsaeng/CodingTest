function solution(array, commands) {
  return commands.map((command) => {
    const [start, end, index] = command;
    const value = [...array]
      .splice(start - 1, end - start + 1)
      .sort((a, b) => a - b)[index - 1];
    return value;
  });
}
