function solution(s) {
  let answer = 0;
  for (let idx = 0; idx < s.length; idx++) {
    const temp = s.slice(idx) + s.slice(0, idx);
    const stack = [];
    for (let i = 0; i < s.length; i++) {
      if (
        temp[i] === "(" ||
        temp[i] === "{" ||
        temp[i] === "[" ||
        stack.length === 0
      )
        stack.push(temp[i]);
      else {
        if (stack.at(-1) === "(" && temp[i] === ")") stack.pop();
        if (stack.at(-1) === "{" && temp[i] === "}") stack.pop();
        if (stack.at(-1) === "[" && temp[i] === "]") stack.pop();
      }
    }
    if (stack.length === 0) answer++;
  }

  return answer;
}
