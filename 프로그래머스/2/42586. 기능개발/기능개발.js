function solution(progresses, speeds) {
    const queue = [];
    const answer = [];
    
    for(let i = 0; i < progresses.length; i++) {
        const day = Math.ceil((100 - progresses[i]) / speeds[i]);
        queue.push(day);
    }
    
    while(queue.length) {
        let cnt = 1;
        const fo = queue.shift();
        while(fo >= queue[0] && queue.length) {
            queue.shift();
            cnt++;
        }
        answer.push(cnt);
    }
    
    return answer;
}