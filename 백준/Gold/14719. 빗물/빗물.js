const fs = require("fs");

// 입력 파일 경로 설정 (동적으로 인자로 받은 파일 또는 백준 환경)
const inputPath = process.argv[2] || "/dev/stdin";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

function solve() {
  const it = input.values();
  const [H, W] = it.next().value.split(" ").map(Number);
  const heights = it.next().value.split(" ").map(Number);

  let left = 0;
  let leftHeight = heights[left];

  let right = W - 1;
  let rightHeight = heights[right];

  let result = 0;
  while (left < right) {
    if (leftHeight < rightHeight) {
      left++;
      if (leftHeight < heights[left]) leftHeight = heights[left];
      else result += leftHeight - heights[left];
    } else {
      right--;
      if (rightHeight < heights[right]) rightHeight = heights[right];
      else result += rightHeight - heights[right];
    }
  }

  return result;
}

console.log(solve());