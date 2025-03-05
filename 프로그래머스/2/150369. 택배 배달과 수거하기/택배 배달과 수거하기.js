function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let dLen = n;
  let pLen = n;

  while (dLen !== 0 || pLen !== 0) {
    while (deliveries.at(-1) === 0 && deliveries.length > 0) {
      deliveries.pop();
      dLen--;
    }

    while (pickups.at(-1) === 0 && pickups.length > 0) {
      pickups.pop();
      pLen--;
    }

    let totalLen = Math.max(dLen, pLen);
    let dCap = cap;
    let pCap = cap;

    while (dCap !== 0 && deliveries.length > 0) {
      if (deliveries.at(-1) <= dCap) {
        const dPop = deliveries.pop();
        dLen--;
        dCap -= dPop;
      } else {
        deliveries[deliveries.length - 1] -= dCap;
        dCap = 0;
      }
    }

    while (pCap !== 0 && pickups.length > 0) {
      if (pickups.at(-1) <= pCap) {
        const pPop = pickups.pop();
        pLen--;
        pCap -= pPop;
      } else {
        pickups[pickups.length - 1] -= pCap;
        pCap = 0;
      }
    }

    answer += totalLen * 2;
  }
  return answer;
}