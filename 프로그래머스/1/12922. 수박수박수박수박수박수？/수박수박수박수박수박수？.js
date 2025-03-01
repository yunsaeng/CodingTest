function solution(n) {
  let result = "수박".repeat(Math.floor(n / 2));
  if (n % 2 !== 0) {
    result += "수";
  }
  return result;
}