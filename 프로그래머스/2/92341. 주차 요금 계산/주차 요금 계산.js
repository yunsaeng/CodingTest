function solution(fees, records) {
  const [DEFAULT_MINUTES, DEFAULT_FEES, PER_MINUTES, PER_FEES] = fees;
  let carsRecords = new Map();
  let carsTimes = new Map();
  let carsFees = [];

  records.forEach((record) => {
    const [time, carNumber, in_out] = record.split(" ");
    const [hour, minute] = time.split(":").map((e) => Number(e));
    const transTime = hour * 60 + minute;

    if (in_out === "IN") {
      carsRecords.set(carNumber, transTime);
    } else if (in_out === "OUT") {
      carsTimes.has(carNumber)
        ? carsTimes.set(
            carNumber,
            carsTimes.get(carNumber) + (transTime - carsRecords.get(carNumber))
          )
        : carsTimes.set(carNumber, transTime - carsRecords.get(carNumber));
      carsRecords.delete(carNumber);
    }
  });

  const finalTime = 23 * 60 + 59;
  for (const [key, value] of carsRecords) {
    carsTimes.has(key)
      ? carsTimes.set(key, carsTimes.get(key) + (finalTime - value))
      : carsTimes.set(key, finalTime - value);
  }

  const sortCarsTimes = [...carsTimes].sort((a, b) => a[0] - b[0]);

  for (const [key, value] of sortCarsTimes) {
    if (value <= DEFAULT_MINUTES) {
      carsFees.push(DEFAULT_FEES);
    } else {
      carsFees.push(
        DEFAULT_FEES + Math.ceil((value - DEFAULT_MINUTES) / PER_MINUTES) * PER_FEES
      );
    }
  }
  return carsFees;
}