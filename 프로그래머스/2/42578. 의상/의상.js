function solution(clothes) {
  const ootd = {};
  clothes.forEach(([cloth, type]) => {
    if (ootd.hasOwnProperty(type)) ootd[type]++;
    else ootd[type] = 1;
  });

  let answer = 1;
  for (const key in ootd) answer *= ootd[key] + 1;

  return answer - 1;
}