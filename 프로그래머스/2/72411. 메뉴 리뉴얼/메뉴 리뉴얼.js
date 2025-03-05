function solution(orders, course) {
  const db = {};
  const max = {};

  const getCombinations = (arr, num) => {
    if (num === 1) return arr.map((e) => [e]);

    const result = [];

    arr.forEach((fixed, idx, origin) => {
      const rest = origin.slice(idx + 1);
      const combinations = getCombinations(rest, num - 1);
      const attached = combinations.map((combination) => [
        fixed,
        ...combination,
      ]);
      result.push(...attached);
    });

    return result;
  };

  for (const len of course) {
    orders.forEach((order) => {
      order = order.split("").sort();
      getCombinations(order, len).forEach((combination) => {
        combination = combination.join("");
        db[combination] = (db[combination] || 0) + 1;
        max[len] = Math.max(max[len] || 0, db[combination]);
      });
    });
  }

  return Object.keys(db)
    .filter((data) => db[data] >= 2 && db[data] === max[data.length])
    .sort();
}