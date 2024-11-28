function solution(n, k) {
  const isPrime = (number) => {
    if (number === 1) return false;
    for (let i = 2; i * i <= number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  };

  return n
    .toString(k)
    .split("0")
    .filter((e) => e.length > 0)
    .map((e) => Number(e))
    .filter(isPrime).length;
}
