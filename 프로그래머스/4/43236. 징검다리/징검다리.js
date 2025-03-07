function solution(distance, rocks, n) {
    let answer = 0;
    rocks = [...rocks, distance].sort((a, b) => a - b);
    let left = 0;
    let right = distance;
    
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        let crash = 0, prev = 0;
        
        for(const rock of rocks) {
            if(rock - prev < mid) crash++;
            else prev = rock;
            if(crash > n) break;
        }
        
        if(crash > n) right = mid - 1;
        else {
            left = mid + 1;
            answer = Math.max(mid, answer);
        }
    }
    return answer;
}