function solution(players, m, k) {
  let answer = 0;
  let activeServers = 0; // 현재 사용 중인 서버 개수
  let endTimes = []; // 각 서버가 끝나는 시간

  players.forEach((player, idx) => {
    // k 범위를 벗어난 서버 제거 (더 이상 유효하지 않음)
    while (endTimes.length > 0 && endTimes[0] <= idx) {
      endTimes.shift();
      activeServers--;
    }

    const needServers = Math.floor(player / m);
    if (needServers > activeServers) {
      const addServers = needServers - activeServers;
      answer += addServers;
      activeServers += addServers;
      for (let i = 0; i < addServers; i++) {
        endTimes.push(idx + k); // 새 서버 종료 시간 기록
      }
    }
  });

  return answer;
}