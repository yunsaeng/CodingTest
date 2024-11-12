function solution(users, emoticons) {
  const discounts = [10, 20, 30, 40];
  let maxSubscribers = 0;
  let maxRevenue = 0;

  const dfs = (index, discountsCombination) => {
    if (index === emoticons.length) {
      caculateSubscribersAndRevenue(discountsCombination);
      return;
    }

    for (const discount of discounts) {
      discountsCombination[index] = discount;
      dfs(index + 1, discountsCombination);
    }
  };

  const caculateSubscribersAndRevenue = (discountsCombination) => {
    let subscribers = 0;
    let revenue = 0;

    for (const [limitDiscount, limitPrice] of users) {
      let tempPrice = 0;
      for (let index = 0; index < emoticons.length; index++) {
        if (limitDiscount > discountsCombination[index]) continue;

        tempPrice +=
          (emoticons[index] * (100 - discountsCombination[index])) / 100;
      }

      if (tempPrice >= limitPrice) subscribers++;
      else revenue += tempPrice;
    }

    if (
      maxSubscribers < subscribers ||
      (maxSubscribers === subscribers && maxRevenue < revenue)
    ) {
      maxSubscribers = subscribers;
      maxRevenue = revenue;
    }
  };

  dfs(0, Array(emoticons.length).fill(0));
  return [maxSubscribers, maxRevenue];
}
