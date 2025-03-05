function solution(p) {
  const isCorrect = (str) => {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
      if (stack.at(-1) === "(" && str[i] === ")") stack.pop();
      else stack.push(str[i]);
    }
    return stack.length === 0;
  };

  const seperate = (str) => {
    let sum = 0;
    let idx = 0;
    for (idx; idx < str.length; idx++) {
      sum += str[idx] === "(" ? 1 : -1;
      if (sum === 0) break;
    }
    return [str.slice(0, idx + 1), str.slice(idx + 1)];
  };

  const transform = (str) => {
    if (str.length === 0) return "";

    const [u, v] = seperate(str);

    if (isCorrect(u)) {
      return u + transform(v);
    } else {
      const reversedU = u
        .slice(1, u.length - 1)
        .split("")
        .map((e) => (e === "(" ? ")" : "("))
        .join("");
      return "(" + transform(v) + ")" + reversedU;
    }
  };

  if (isCorrect(p)) return p;
  return transform(p);
}
