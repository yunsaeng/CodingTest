function solution(land) {
  let oils = new Map();
  let visited = [];

  for (let col = 0; col < land[0].length; col++) {
    for (let row = 0; row < land.length; row++) {
      let indexSet = new Set();
      let tempCount = 0;
      if (land[row][col] === 1) {
        visited.push([row, col]);
        while (visited.length) {
          const [posRow, posCol] = visited.shift();

          if (land[posRow][posCol] === 1) {
            land[posRow][posCol] = 0;
            tempCount++;
            if (!indexSet.has(posCol)) indexSet.add(posCol);

            for (let dr = -1; dr <= 1; dr++) {
              for (let dc = -1; dc <= 1; dc++) {
                if (Math.abs(dr) === Math.abs(dc)) continue;
                const newRow = posRow + dr;
                const newCol = posCol + dc;

                if (
                  newRow >= 0 &&
                  newRow < land.length &&
                  newCol >= 0 &&
                  newCol < land[0].length &&
                  land[newRow][newCol] === 1
                ) {
                  visited.push([newRow, newCol]);
                }
              }
            }
          }
        }
      }
      if (tempCount !== 0) {
        for (const index of indexSet) {
          oils.set(
            index,
            oils.has(index) ? oils.get(index) + tempCount : tempCount
          );
        }
      }
    }
  }

  const answer = Math.max(...oils.values());

  return answer;
}
