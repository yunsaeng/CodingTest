function solution(number, limit, power) {
  const soldiers = [];
  for (let i = 1; i <= number; i++) soldiers.push(getDivisor(i));
  return soldiers.reduce((acc, cur) => {
    if (cur > limit) return acc + power;
    else return acc + cur;
  }, 0);

  function getDivisor(num) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        if (i === Math.sqrt(num)) count++;
        else count += 2;
      }
    }

    return count;
  }
}
