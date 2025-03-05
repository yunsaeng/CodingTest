function solution(s) {
  let count = 0;
  let zero = 0;

  while (s !== '1') {
    let zeros = 0;
    for (let char of s) {
      if (char === '0') {
        zeros++;
      }
    }
    zero += zeros;
    s = (s.length - zeros).toString(2);
    count++;
  }

  return [count, zero];
}