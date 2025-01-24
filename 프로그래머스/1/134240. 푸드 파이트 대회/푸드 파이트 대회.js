function solution(food) {
  let res = "";
  for (let i = 1; i < food.length; i++)
    res += String(i).repeat(Math.floor(food[i] / 2));
  return res + "0" + res.split("").reverse().join("");
  // return res + '0' + [...res].reverse().join("");
}