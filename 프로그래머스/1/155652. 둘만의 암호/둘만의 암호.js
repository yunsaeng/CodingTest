function solution(s, skip, index) {
  let alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(i + 97)
  ).filter((alpha) => !skip.includes(alpha));

  let answer = [...s];
  return answer
    .map(
      (alpha) => alphabet[(alphabet.indexOf(alpha) + index) % alphabet.length]
    )
    .join("");
}
