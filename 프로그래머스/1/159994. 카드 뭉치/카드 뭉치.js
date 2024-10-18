function solution(cards1, cards2, goal) {
    let answer = '';
    let isMake = true;
    
    for(word of goal) {
        if(word === cards1[0]) cards1.shift();
        else if (word === cards2[0]) cards2.shift();
        else {
            isMake = false;
        };
    }
    
    if(isMake) answer = "Yes";
    else answer = "No";
    
    return answer;
}