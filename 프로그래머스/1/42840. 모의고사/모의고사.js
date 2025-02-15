function solution(answers) {
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const oneScore = answers.reduce(
    (acc, cur, index) => (cur === one[index % one.length] ? acc + 1 : acc),
    0
  );
  const twoScore = answers.reduce(
    (acc, cur, index) => (cur === two[index % two.length] ? acc + 1 : acc),
    0
  );
  const threeScore = answers.reduce(
    (acc, cur, index) => (cur === three[index % three.length] ? acc + 1 : acc),
    0
  );

  const max = Math.max(Math.max(oneScore, twoScore), threeScore);
  return [
    [1, oneScore],
    [2, twoScore],
    [3, threeScore],
  ]
    .filter((e) => e[1] === max)
    .map((e) => e[0]);
}
