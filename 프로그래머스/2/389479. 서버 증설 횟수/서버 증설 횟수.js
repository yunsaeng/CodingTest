function solution(players, m, k) {
  let answer = [];
  players.forEach((player, idx) => {
    const needServers = Math.floor(player / m);
    const currentServers = answer.filter((e) => e + k > idx).length;
    if (needServers > currentServers) {
      for (let i = 1; i <= needServers - currentServers; i++) {
        answer.push(idx);
      }
    }
  });
  return answer.length;
}
