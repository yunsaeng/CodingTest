function solution(data, col, row_begin, row_end) {
  const hashs = data
    .sort((a, b) =>
      a[col - 1] === b[col - 1] ? b[0] - a[0] : a[col - 1] - b[col - 1]
    )
    .map((d, i) => {
      return d.reduce((acc, cur) => {
        return acc + (cur % (i + 1));
      }, 0);
    });

  let answer = hashs[row_begin - 1];
  for (let i = row_begin; i < row_end; i++) answer = answer ^ hashs[i];

  return answer;
}
