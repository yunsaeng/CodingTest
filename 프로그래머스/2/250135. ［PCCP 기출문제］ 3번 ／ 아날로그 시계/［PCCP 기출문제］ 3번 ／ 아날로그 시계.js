const getAngle = (time) => {
  const hourHandAnglePerSecond = 360 / (12 * 60 * 60);
  const minuteHandAnglePerSecond = 360 / (60 * 60);
  const secondHandAnglePerSecond = 360 / 60;

  const hourAngle = (hourHandAnglePerSecond * time) % 360;
  const minuteAngle = (minuteHandAnglePerSecond * time) % 360;
  const secondAngle = (secondHandAnglePerSecond * time) % 360;

  return { hourAngle, minuteAngle, secondAngle };
};

const hourEqualSecond = (posAngle, nextAngle) => {
  if (
    posAngle.hourAngle > posAngle.secondAngle &&
    nextAngle.hourAngle <= nextAngle.secondAngle
  )
    return true;

  if (posAngle.secondAngle === 354 && posAngle.hourAngle > 354) return true;

  return false;
};

const minuteEqualSecond = (posAngle, nextAngle) => {
  if (
    posAngle.minuteAngle > posAngle.secondAngle &&
    nextAngle.minuteAngle <= nextAngle.secondAngle
  )
    return true;

  if (posAngle.secondAngle === 354 && posAngle.minuteAngle > 354) return true;

  return false;
};

function solution(h1, m1, s1, h2, m2, s2) {
  let answer = 0;

  const start = h1 * 60 * 60 + m1 * 60 + s1;
  const end = h2 * 60 * 60 + m2 * 60 + s2;

  if (start === 0 || start === 43200) answer++;

  for (let time = start; time < end; time++) {
    const posAngle = getAngle(time);
    const nextAngle = getAngle(time + 1);

    if (
      hourEqualSecond(posAngle, nextAngle) &&
      minuteEqualSecond(posAngle, nextAngle)
    ) {
      if (nextAngle.hourAngle === nextAngle.minuteAngle) answer++;
      else answer += 2;
    } else if (
      hourEqualSecond(posAngle, nextAngle) ||
      minuteEqualSecond(posAngle, nextAngle)
    ) {
      answer++;
    }
  }

  return answer;
}
