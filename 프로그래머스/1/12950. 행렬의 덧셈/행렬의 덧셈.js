function solution(arr1, arr2) {
  return arr1.map((array, idx) => 
    array.map((e, i) => e + arr2[idx][i])
  );
}