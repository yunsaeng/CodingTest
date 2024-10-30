function solution(picks, minerals) {
  let answer = 0;
  let tired = [];
  const [dia, iron, stone] = picks;

  const totalLength =
    (dia + iron + stone) * 5 < minerals.length
      ? (dia + iron + stone) * 5
      : minerals.length;

  for (let i = 0; i < totalLength; i += 5) {
    let diaTired = 0;
    let ironTired = 0;
    let stoneTired = 0;

    let index = i;
    while (index < minerals.length && index < i + 5) {
      if (minerals[index] === "diamond") {
        diaTired++;
        ironTired += 5;
        stoneTired += 25;
      }
      if (minerals[index] === "iron") {
        diaTired++;
        ironTired++;
        stoneTired += 5;
      }
      if (minerals[index] === "stone") {
        diaTired++;
        ironTired++;
        stoneTired++;
      }
      index++;
    }

    tired.push([diaTired, ironTired, stoneTired]);
  }

  tired.sort((a, b) => {
    return b[2] - a[2];
  });

  for (const [diaTired, ironTired, stoneTired] of tired) {
    if (picks[0] > 0) {
      answer += diaTired;
      picks[0]--;
    } else if (picks[1] > 0) {
      answer += ironTired;
      picks[1]--;
    } else if (picks[2] > 0) {
      answer += stoneTired;
      picks[2]--;
    } else break;
  }

  return answer;
}
