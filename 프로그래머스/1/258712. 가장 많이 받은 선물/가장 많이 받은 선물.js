function solution(friends, gifts) {
  let from_gifts = [];
  let to_gifts = [];
  let gifts_index = [];
  let give_take_gifts = new Array(friends.length)
    .fill(0)
    .map(() => new Array(friends.length).fill(0));
  let next_gifts = new Array(friends.length).fill(0);
  let answer = 0;

  gifts.forEach((gift) => {
    const temp = gift.split(" ");
    from_gifts.push(temp[0]);
    to_gifts.push(temp[1]);
  });

  friends.forEach((friend) => {
    const from_count = from_gifts.filter(
      (from_gift) => from_gift === friend
    ).length;
    const to_count = to_gifts.filter((to_gift) => to_gift === friend).length;
    const index = from_count - to_count;
    gifts_index.push(index);
  });

  from_gifts.forEach((_, index) => {
    const from_index = friends.indexOf(from_gifts[index]);
    const to_index = friends.indexOf(to_gifts[index]);
    give_take_gifts[from_index][to_index]++;
  });

  for (let i = 0; i < friends.length - 1; i++) {
    for (let j = i + 1; j < friends.length; j++) {
      if (give_take_gifts[i][j] > give_take_gifts[j][i]) {
        next_gifts[i]++;
      } else if (give_take_gifts[i][j] < give_take_gifts[j][i]) {
        next_gifts[j]++;
      } else {
        if (gifts_index[i] > gifts_index[j]) {
          next_gifts[i]++;
        } else if (gifts_index[i] < gifts_index[j]) {
          next_gifts[j]++;
        }
      }
    }
  }

  next_gifts.forEach((next_gift) => {
    if (answer < next_gift) {
      answer = next_gift;
    }
  });

  return answer;
}
