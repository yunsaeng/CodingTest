function solution(line) {
  const intersectPoints = [];

  for (let i = 0; i < line.length - 1; i++) {
    for (let j = i + 1; j < line.length; j++) {
      const [a, b, e] = line[i];
      const [c, d, f] = line[j];

      const det = a * d - b * c;
      const x = (b * f - e * d) / det;
      const y = (c * e - a * f) / det;

      if (Number.isInteger(x) && Number.isInteger(y))
        intersectPoints.push([x, y]);
    }
  }

  let maxX = Number.MIN_SAFE_INTEGER;
  let minX = Number.MAX_SAFE_INTEGER;
  let maxY = Number.MIN_SAFE_INTEGER;
  let minY = Number.MAX_SAFE_INTEGER;

  for (const [x, y] of intersectPoints) {
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
  }

  const width = maxX - minX + 1;
  const height = maxY - minY + 1;

  const plane = Array.from({ length: height }, () => Array(width).fill("."));

  for (const [x, y] of intersectPoints) {
    plane[maxY - y][x - minX] = "*";
  }

  return plane.map((row) => row.join(""));
}
