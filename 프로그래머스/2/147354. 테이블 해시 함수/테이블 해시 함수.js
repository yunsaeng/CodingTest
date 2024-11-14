function solution(data, col, row_begin, row_end) {
  return data
    .sort((a, b) =>
      a[col - 1] === b[col - 1] ? b[0] - a[0] : a[col - 1] - b[col - 1]
    )
    .map((d, i) => d.reduce((acc, cur) => acc + (cur % (i + 1)), 0))
    .slice(row_begin - 1, row_end)
    .reduce((acc, cur) => acc ^ cur, 0);
}