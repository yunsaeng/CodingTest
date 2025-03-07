function solution(people, limit) {
    people.sort((a, b) => a - b); // 오름차순 정렬
    let answer = 0;
    let start = 0; // 가장 가벼운 사람
    let end = people.length - 1; // 가장 무거운 사람
    
    while (start <= end) {
        if (people[start] + people[end] <= limit) {
            start++; // 가벼운 사람을 함께 탈 수 있으면 한 명 증가
        }
        end--; // 무거운 사람은 반드시 탈 수 있으므로 한 명 감소
        answer++; // 구명보트가 하나 추가됨
    }
    
    return answer;
}