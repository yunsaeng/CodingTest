function solution(priorities, location) {
    let queue = priorities.map((priority, index) => [priority, index]); // [우선순위, 원래 위치]
    let sortedPriorities = [...priorities].sort((a, b) => b - a); // 중요도 내림차순 정렬
    let count = 0;

    while (queue.length) {
        let [priority, index] = queue.shift();
        
        // 현재 프로세스가 가장 높은 우선순위인지 확인
        if (priority === sortedPriorities[0]) {
            count++;
            sortedPriorities.shift(); // 가장 높은 우선순위 제거

            // 목표 프로세스가 실행될 차례라면 정답 반환
            if (index === location) return count;
        } else {
            queue.push([priority, index]); // 우선순위가 낮으면 다시 큐에 추가
        }
    }

    return -1; // 정상적으로 실행되지 않을 경우 (실제론 도달하지 않음)
}