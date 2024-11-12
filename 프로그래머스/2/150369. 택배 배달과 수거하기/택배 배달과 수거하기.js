function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let delivery_end = n;
  const delivery_answer = [];
  let pickup_end = n;
  const pickup_answer = [];

  while (delivery_end > 0) {
    let pos_cap = cap;

    if (deliveries[delivery_end - 1] === 0) {
      delivery_end--;
      continue;
    }

    delivery_answer.push(delivery_end);
    while (delivery_end > 0 && pos_cap > 0) {
      if (deliveries[delivery_end - 1] > pos_cap) {
        deliveries[delivery_end - 1] -= pos_cap;
        pos_cap = 0;
      } else {
        pos_cap -= deliveries[delivery_end - 1];
        delivery_end--;
      }
    }
  }

  while (pickup_end > 0) {
    let pos_cap = cap;

    if (pickups[pickup_end - 1] === 0) {
      pickup_end--;
      continue;
    }

    pickup_answer.push(pickup_end);
    while (pickup_end > 0 && pos_cap > 0) {
      if (pickups[pickup_end - 1] > pos_cap) {
        pickups[pickup_end - 1] -= pos_cap;
        pos_cap = 0;
      } else {
        pos_cap -= pickups[pickup_end - 1];
        pickup_end--;
      }
    }
  }

  let index = 0;
  while (delivery_answer[index] || pickup_answer[index]) {
    if (
      pickup_answer[index] >= delivery_answer[index] ||
      !delivery_answer[index]
    )
      answer += pickup_answer[index] * 2;

    if (delivery_answer[index] > pickup_answer[index] || !pickup_answer[index])
      answer += delivery_answer[index] * 2;

    index++;
  }

  return answer;
}
