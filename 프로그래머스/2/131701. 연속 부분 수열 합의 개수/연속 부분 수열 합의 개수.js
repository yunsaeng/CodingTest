function solution(elements) {
  const set = new Set();
  const temp = [...elements, ...elements];

  for (let count = 1; count <= elements.length; count++) {
    for (let i = 0; i <= elements.length; i++) {
      const arr = temp.slice(i, i + count);
      set.add(arr.reduce((acc, cur) => acc + cur, 0));
    }
  }
  return set.size;
}
