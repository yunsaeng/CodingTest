function solution(queue1, queue2) {
  const queue = [...queue1, ...queue2];
  const targetSum = queue.reduce((acc, cur) => acc + cur, 0);

  if (targetSum % 2 !== 0) return -1;

  const sum = targetSum / 2;
  let temp = queue1.reduce((acc, cur) => acc + cur, 0);
  let left = 0;
  let right = queue1.length;

  const maxOperations = queue.length * 2;
  let operations = 0;

  while (operations <= maxOperations) {
    if (temp === sum) return operations;
    if (temp < sum) {
      temp += queue[right % queue.length];
      right++;
    } else {
      temp -= queue[left % queue.length];
      left++;
    }
    operations++;
  }

  return -1;
}
