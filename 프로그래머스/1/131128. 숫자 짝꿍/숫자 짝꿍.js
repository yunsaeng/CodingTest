function solution(X, Y) {
  const countX = Array(10).fill(0);
  const countY = Array(10).fill(0);

  for (const digit of X) countX[digit]++;
  for (const digit of Y) countY[digit]++;

  const dup = [];

  for (let i = 9; i >= 0; i--) {
    const repeatCount = Math.min(countX[i], countY[i]);
    dup.push(String(i).repeat(repeatCount));
  }

  const answer = dup.join("");

  if (!answer) return "-1";
  return answer[0] === "0" ? "0" : answer;
}
