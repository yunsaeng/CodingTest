function solution(n, lost, reserve) {
  const newReserve = reserve
    .filter((e) => !lost.includes(e))
    .sort((a, b) => a - b);
  const newLost = lost
    .filter((e) => !reserve.includes(e))
    .sort((a, b) => a - b);

  for (let i = 0; i < newReserve.length; i++) {
    for (let j = 0; j < newLost.length; j++) {
      if (Math.abs(newLost[j] - newReserve[i]) === 1) {
        newLost.splice(j, 1);
        break;
      }
    }
  }
  return n - newLost.length;
}
