function solution(s, skip, index) {
  let possibleAlpha = Array.from({ length: 26 }, (_, i) => 
    String.fromCharCode(i + 97)
  ).filter((alpha) => !skip.includes(alpha));

  let answer = [...s];
  answer.forEach((alpha, idx) => {
    let currentIndex = possibleAlpha.indexOf(alpha);
    answer[idx] =
      possibleAlpha[
        (currentIndex + index) % possibleAlpha.length
      ];
  });

  return answer.join("");
}