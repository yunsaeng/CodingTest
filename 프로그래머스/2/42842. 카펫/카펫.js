function solution(brown, yellow) {
  const primes = [];
  for (let i = 1; i <= Math.sqrt(yellow); i++) {
    if (yellow % i === 0) primes.push([i, yellow / i]);
  }
  for (let i = 0; i < primes.length; i++) {
    const [height, width] = primes[i];
    if ((height + width) * 2 + 4 === brown) return [width + 2, height + 2];
  }
}
