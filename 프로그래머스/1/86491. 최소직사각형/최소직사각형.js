function solution(sizes) {
  let max_width = Number.MIN_SAFE_INTEGER;
  let max_height = Number.MIN_SAFE_INTEGER;
  sizes.forEach((size) => {
    const [width, height] = size.sort((a, b) => b - a);
    max_width = Math.max(max_width, width);
    max_height = Math.max(max_height, height);
  });
  return max_width * max_height;
}