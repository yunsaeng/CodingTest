function solution(want, number, discount) {
  const wants = new Map();

  for (let i = 0; i < want.length; i++) {
    wants.set(want[i], number[i]);
  }

  let matches = 0;

  for (let i = 0; i < 10; i++) {
    if (wants.has(discount[i])) {
      wants.set(discount[i], wants.get(discount[i]) - 1);
    }
  }

  if (Array.from(wants.values()).every((count) => count <= 0)) {
    matches++;
  }

  for (let i = 10; i < discount.length; i++) {
    const left = discount[i - 10];
    const right = discount[i];

    if (wants.has(left)) {
      wants.set(left, wants.get(left) + 1);
    }

    if (wants.has(right)) {
      wants.set(right, wants.get(right) - 1);
    }

    if (Array.from(wants.values()).every((count) => count <= 0)) {
      matches++;
    }
  }

  return matches;
}
