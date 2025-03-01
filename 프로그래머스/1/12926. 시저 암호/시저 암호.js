function solution(s, n) {
    var answer = '';
    return answer;
}function solution(s, n) {
  return s
    .split("")
    .map((char) => {
      if (/[a-z]/.test(char)) {
        // 소문자일 때
        return String.fromCharCode(
          ((char.charCodeAt(0) - 97 + n) % 26) + 97
        );
      } else if (/[A-Z]/.test(char)) {
        // 대문자일 때
        return String.fromCharCode(
          ((char.charCodeAt(0) - 65 + n) % 26) + 65
        );
      }
      return char; // 알파벳이 아니면 그대로 반환
    })
    .join("");
}
