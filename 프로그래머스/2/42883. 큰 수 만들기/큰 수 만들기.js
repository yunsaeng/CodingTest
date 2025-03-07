function solution(number, k) {
    const stack = [];
    let removeCount = 0;
    
    for(let i = 0; i < number.length; i++) {
        while(stack.length && stack.at(-1) < number[i] && removeCount < k) {
            stack.pop();
            removeCount++;
        }
        stack.push(number[i]);
    }
    
    return stack.slice(0, number.length - k).join("");
}