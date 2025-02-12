function solution(schedules, timelogs, startday) {
  return schedules.reduce((acc, schedule, index) => {
    const sat = 6 - startday < 0 ? 6 : 6 - startday;
    const sun = 7 - startday;

    const hours = Math.floor(schedule / 100);
    const minutes = schedule % 100;
    const admit_hours = (hours + (minutes + 10 >= 60 ? 1 : 0)) % 24;
    const admit_minutes = minutes + 10 >= 60 ? minutes - 50 : minutes + 10;

    const admit_time = admit_hours * 100 + admit_minutes;

    let late = false;

    for (let i = 0; i < timelogs[index].length; i++) {
      if (i === sat || i === sun) continue;

      if (!(timelogs[index][i] <= admit_time)) {
        late = true;
        break;
      }
    }

    return late ? acc : acc + 1;
  }, 0);
}