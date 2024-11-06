function solution(numbers) {
  let answer = new Array(numbers.length).fill(-1);
  let stack = [];
  for (let index = 0; index < numbers.length; index++) {
    while (stack && numbers[stack.at(-1)] < numbers[index])
      answer[stack.pop()] = numbers[index];
    stack.push(index);
  }
  return answer;
}