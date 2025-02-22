function solution(numbers) {
  const isPrime = (n) => {
    if (n === 0 || n === 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };
  const answer = new Set();
  const visited = Array.from({ length: numbers.length }, () => false);
  numbers = numbers.split("");
  let str = "";
  const dfs = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        str += numbers[i];
        if (isPrime(Number(str))) answer.add(Number(str));
        dfs(numbers);
        visited[i] = false;
        str = str.slice(0, -1);
      }
    }
  };

  dfs(numbers);
  return [...answer].length;
}
