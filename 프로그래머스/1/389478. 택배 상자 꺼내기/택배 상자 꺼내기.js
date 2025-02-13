function solution(n, w, num) {
  const floor = Array.from({ length: w }, () => []);

  let odd = true;
  for (let i = 1; i <= n; i += w) {
    for (let j = 0; j < w; j++) {
      if (i + j > n) break;

      if (odd) floor[j].push(i + j);
      else floor[w - j - 1].push(i + j);
    }
    odd = !odd;
  }

  const index = floor.findIndex((arr) => arr.includes(num));

  return floor[index].length - Math.ceil(num / w) + 1;
}
