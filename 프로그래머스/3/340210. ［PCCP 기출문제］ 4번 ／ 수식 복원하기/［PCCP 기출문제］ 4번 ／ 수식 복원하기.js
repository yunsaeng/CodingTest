function solution(expressions) {
  var answer = [];
  const baseSet = new Set([2, 3, 4, 5, 6, 7, 8, 9]);

  expressions.forEach((expression) => {
    const [A, op, B, , C] = expression.split(" ");
    const maxDigit =
      C === "X"
        ? Math.max(...[...A, ...B].map(Number))
        : Math.max(...[...A, ...B, ...C].map(Number));
    for (let i = 2; i <= maxDigit; i++) baseSet.delete(i);

    if (C !== "X") {
      for (const base of baseSet) {
        const a = parseInt(A, base);
        const b = parseInt(B, base);
        const c = parseInt(C, base);
        if (!(op === "+" && a + b === c) && !(op === "-" && a - b === c))
          baseSet.delete(base);
      }
    }
  });

  const base = baseSet.size === 1 ? [...baseSet][0] : null;

  expressions.forEach((expression) => {
    const [A, op, B, , C] = expression.split(" ");

    if (C === "X") {
      if (base) {
        const a = parseInt(A, base);
        const b = parseInt(B, base);
        let result;
        if (op === "+") result = a + b;
        else result = a - b;
        answer.push(`${A} ${op} ${B} = ${result.toString(base)}`);
      } else {
        let result = null;
        let isConsistent = true;
        for (const baseEl of baseSet) {
          const a = parseInt(A, baseEl);
          const b = parseInt(B, baseEl);
          let currentResult;
          if (op === "+") currentResult = a + b;
          else currentResult = a - b;
          if (result === null) result = currentResult.toString(baseEl);
          else if (result !== currentResult.toString(baseEl)) {
            isConsistent = false;
            break;
          }
        }
        if (isConsistent) answer.push(`${A} ${op} ${B} = ${result}`);
        else answer.push(`${A} ${op} ${B} = ?`);
      }
    }
  });

  return answer;
}
