function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  const differOne = (cur, compare) => {
    let count = 0;
    for (let i = 0; i < cur.length; i++) {
      if (cur[i] !== compare[i]) count++;
    }
    return count === 1 ? true : false;
  };

  const visited = new Set();
  const queue = [[begin, 0]];

  while (queue.length > 0) {
    const [cur, change] = queue.shift();
    if (cur === target) return change;

    for (const word of words) {
      if (!visited.has(word) && differOne(cur, word)) {
        visited.add(word);
        queue.push([word, change + 1]);
      }
    }
  }
  return 0;
}