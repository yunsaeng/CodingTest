function solution(numbers) {
  return numbers.map((number) => {
    number = BigInt(number);
    if (number % 2n === 0n) return number + 1n;
    let bit = 1n;
    while ((number & bit) !== 0n) bit <<= 1n;
    return number + (bit >> 1n);
  });
}
