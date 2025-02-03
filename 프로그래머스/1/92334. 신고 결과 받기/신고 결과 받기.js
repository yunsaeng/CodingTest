function solution(id_list, report, k) {
  const reportRecord = {};
  const reportCount = {};

  for (const id of id_list) {
    reportRecord[id] = [];
    reportCount[id] = 0;
  }

  report.forEach((r) => {
    const [a, b] = r.split(" ");
    if (!reportRecord[a].includes(b)) {
      reportRecord[a].push(b);
      reportCount[b]++;
    }
  });

  return id_list.map((id) =>
    reportRecord[id].reduce(
      (acc, cur) => (reportCount[cur] >= k ? acc + 1 : acc),
      0
    )
  );
}