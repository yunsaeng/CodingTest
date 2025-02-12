function solution(price, money, count) {
  const gauss = ((count + 1) * count) / 2;
  return money >= price * gauss ? 0 : price * gauss - money;
}