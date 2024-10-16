function solution(players, callings) {
    let answer = [...players];
    let index ={}
    
    players.forEach((player, idx) => {
        index[player] = idx;
    })
    
    callings.forEach((call) => {
        const callPlayer = answer[index[call]];
        const catchPlayer = answer[index[call] - 1];
        answer[index[call]] = answer[index[call] - 1];
        answer[index[call] - 1] = callPlayer;
        index[callPlayer]--;
        index[catchPlayer]++;
    })
    return answer;
}