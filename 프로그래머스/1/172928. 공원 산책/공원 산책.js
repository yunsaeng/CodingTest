function solution(park, routes) {
  const dir_x = [0, 1, 0, -1];
  const dir_y = [-1, 0, 1, 0];
  const compass = {
    N: 0,
    E: 1,
    S: 2,
    W: 3
  };
  let pos_x = 0;
  let pos_y = 0;

  park.forEach((p, index) => {
    const start_x = p.indexOf("S");
    if (start_x !== -1) {
      pos_x = start_x;
      pos_y = index;
    }
  });

  routes.forEach((route) => {
    const [direction, distance] = route.split(" ");
    const x = dir_x[compass[direction]];
    const y = dir_y[compass[direction]];

    const next_x = pos_x + x * distance;
    const next_y = pos_y + y * distance;

    if (
      next_x >= 0 &&
      next_x < park[pos_y].length &&
      next_y >= 0 &&
      next_y < park.length
    ) {
      let isBlock = false;

      for (let i = 1; i <= distance; i++) {
        const process_x = pos_x + x * i;
        const process_y = pos_y + y * i;

        if (park[process_y][process_x] === "X") {
          isBlock = true;
          break;
        }
      }
      if (!isBlock) {
        pos_x = next_x;
        pos_y = next_y;
      }
    }
  });

  return [pos_y, pos_x];
}
