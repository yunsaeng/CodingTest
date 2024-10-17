function solution(wallpaper) {
  let lux = 51;
  let luy = 51;
  let rdx = -1;
  let rdy = -1;

  wallpaper.forEach((col, index) => {
    if (col.includes("#")) {
      if (lux > index) lux = index;
      if (rdx < index) rdx = index;

      const t_luy = col.indexOf("#");
      const t_rdy = col.lastIndexOf("#");
      if (luy > t_luy) luy = t_luy;
      if (rdy < t_rdy) rdy = t_rdy;
    }
  });

  return [lux, luy, rdx + 1, rdy + 1];
}
