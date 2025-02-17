function solution(n, arr1, arr2) {
  const map1 = arr1.map(e => e.toString(2).padStart(n, "0"));
  const map2 = arr2.map(e => e.toString(2).padStart(n, "0"));
  return map1.map((m, row) =>
    [...m].map((e, col) => (e === "1" || map2[row][col] === "1" ? "#" : " ")).join("")
  );
}