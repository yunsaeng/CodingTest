function solution(prices) {
    const n = prices.length;
    const stack = [];
    const answer = Array(n).fill(0);
    
    for(let i = 0; i < n; i++) {
        while(stack.length && prices[i] < prices[stack.at(-1)]) {
            const j = stack.pop();
            answer[j] = i - j;
        }
        stack.push(i);
    }
    
    while(stack.length) {
        const j = stack.pop();
        answer[j] = n - j - 1;
    }
    
    return answer;
}