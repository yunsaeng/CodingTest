function solution(numbers, hand) {
  const answer = [];
  const phone = {
    "*": [0, 0],
    0: [0, 1],
    "#": [0, 2],
    7: [1, 0],
    8: [1, 1],
    9: [1, 2],
    4: [2, 0],
    5: [2, 1],
    6: [2, 2],
    1: [3, 0],
    2: [3, 1],
    3: [3, 2],
  };
  let left = [0, 0];
  let right = [0, 2];

  numbers.forEach((number) => {
    const [row, col] = phone[number];
    if (number === 1 || number === 4 || number === 7) {
      left = [row, col];
      answer.push("L");
    } else if (number === 3 || number === 6 || number === 9) {
      right = [row, col];
      answer.push("R");
    } else {
      const left_distance = Math.abs(row - left[0]) + Math.abs(col - left[1]);
      const rigth_distance =
        Math.abs(row - right[0]) + Math.abs(col - right[1]);
      if (left_distance < rigth_distance) {
        answer.push("L");
        left = [row, col];
      } else if (left_distance > rigth_distance) {
        answer.push("R");
        right = [row, col];
      } else {
        if (hand === "left") {
          answer.push("L");
          left = [row, col];
        } else {
          answer.push("R");
          right = [row, col];
        }
      }
    }
  });

  return answer.join("");
}
