function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let [dIdx, pIdx] = [n - 1, n - 1];

  while (dIdx >= 0 || pIdx >= 0) {
    while (deliveries[dIdx] === 0) dIdx--;
    while (pickups[pIdx] === 0) pIdx--;

    answer += Math.max(dIdx + 1, pIdx + 1) * 2;
    let [dCap, pCap] = [cap, cap];

    while (dCap > 0 && dIdx >= 0) {
      if (deliveries[dIdx] <= dCap) {
        dCap -= deliveries[dIdx];
        dIdx--;
      } else {
        deliveries[dIdx] -= dCap;
        dCap = 0;
      }
    }

    while (pCap > 0 && pIdx >= 0) {
      if (pickups[pIdx] <= pCap) {
        pCap -= pickups[pIdx];
        pIdx--;
      } else {
        pickups[pIdx] -= pCap;
        pCap = 0;
      }
    }
  }
  return answer;
}